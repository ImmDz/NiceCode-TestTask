import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Navbar } from "../Navbar/Navbar";
import { NoteCard } from "../NoteCard/NoteCard";
import { ConsultationCard } from "../ConsultationCard/ConsultationCard";
import { VideoCard } from "../VideoCard/VideoCard";
import { EventCard } from "../EventCard/EventCard";
import { Plus } from "../../assets/icons";

import { IMain } from "../../types/general";

import useAppSelector from "../../hooks/useAppDispatch";
import useAppDispatch from "../../hooks/useAppSelector";
import { addNote } from "../../redux/patient/patientSlice";
import { getPatientState } from "../../redux/patient/patientSelector";

import style from "./Main.module.css";

export const Main = ({ choosenPatient }: IMain) => {
	const dispatch = useAppDispatch();
	const patientState = useAppSelector(getPatientState);
	const navContent = ["Заметки", "Консультации", "Видео", "Мероприятия"];
	const [activeTab, setActiveTab] = useState<string>(navContent[0]);

	const renderTabContent = (activeTab: string) => {
		switch (activeTab) {
			case "Заметки":
				return (
					<>
						{patientState.choosenPatient?.notes.map(note => (
							<NoteCard id={note.id} key={note.id} text={note.text} />
						))}
					</>
				);
			case "Консультации":
				return (
					<>
						{choosenPatient?.consultations.map(patient => (
							<ConsultationCard
								key={patient.id}
								title={patient.title}
								date={patient.date}
								type={patient.type}
								status={patient.status}
							/>
						))}
					</>
				);
			case "Видео":
				return (
					<>
						{choosenPatient?.videos.map(patient => (
							<VideoCard
								key={patient.id}
								title={patient.title}
								author={patient.author}
								img={patient.img}
								date={patient.date}
							/>
						))}
					</>
				);
			case "Мероприятия":
				return (
					<>
						{choosenPatient?.events.map(patient => (
							<EventCard
								key={patient.id}
								title={patient.title}
								type={patient.type}
								date={patient.date}
								time={patient.time}
								img={patient.img}
							/>
						))}
					</>
				);
		}
	};

	return (
		<div className={style.mainContainer}>
			{choosenPatient && (
				<div className={style.mainHeader}>
					<div className={style.photo}>
						<img src={choosenPatient?.img} alt="photo" />
					</div>
					<div className={style.info}>
						<p>
							{choosenPatient?.name} {choosenPatient?.surname}
						</p>
						{choosenPatient && (
							<p>
								{choosenPatient?.age} лет, {choosenPatient?.gender}
							</p>
						)}
					</div>
				</div>
			)}
			<div className={style.mainInteraction}>
				<Navbar content={navContent} activeTab={activeTab} setActiveTab={setActiveTab} />
				{activeTab === "Заметки" && (
					<button
						onClick={() => dispatch(addNote({ id: uuidv4(), text: "" }))}
						className={style.add}
					>
						Новая заметка <Plus />
					</button>
				)}
			</div>
			<div className={style.tabContent}>
				<ul className={style.tabContentList}>{renderTabContent(activeTab)}</ul>
			</div>
		</div>
	);
};
