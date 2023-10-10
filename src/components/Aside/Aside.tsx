import { useState, BaseSyntheticEvent, useEffect } from "react";
import classNames from "classnames";

import { PatientCard } from "../PatientCard/PatientCard";
import { ControlPanel } from "../ControlPanel/ControlPanel";

import useAppDispatch from "../../hooks/useAppSelector";
import useAppSelector from "../../hooks/useAppDispatch";
import { setChoosen } from "../../redux/patient/patientSlice";
import { getPatientState } from "../../redux/patient/patientSelector";
import { setPatients } from "../../redux/patient/patientSlice";

import style from "./Aside.module.css";

export const Aside = () => {
	const dispatch = useAppDispatch();
	const patientState = useAppSelector(getPatientState);
	const [isActivePickButton, setIsActivePickButton] = useState(false);
	const [pickedPatientIds, setPickedPatientIds] = useState<string[]>([]);
	const [filterValue, setFilterValue] = useState("");

	const choosePatient = (id: string) => {
		const choosenPatient = patientState.patients.find(patient => patient.id === id);
		if (choosenPatient) {
			if (isActivePickButton) {
				setPickedPatientIds(prev =>
					prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
				);
			} else dispatch(setChoosen(choosenPatient));
		}
	};

	const chooseAllPatients = (e: BaseSyntheticEvent) => {
		setPickedPatientIds(e.target.checked ? patientState.patients.map(item => item.id) : []);
	};

	const deletePatient = () => {
		const filteredPatients = patientState.patients.filter(
			patient => !pickedPatientIds.includes(patient.id)
		);
		dispatch(setPatients(filteredPatients));
		setPickedPatientIds([]);
	};

	const renderCounter = () => {
		return isActivePickButton ? (
			<>
				<input type="checkbox" onChange={e => chooseAllPatients(e)} />
				<span className={classNames(style.asideCounter, { [style.active]: isActivePickButton })}>
					{pickedPatientIds.length}
				</span>
			</>
		) : (
			<span className={style.asideCounter}>{patientState.patients.length}</span>
		);
	};

	useEffect(() => {
		!isActivePickButton && setPickedPatientIds([]);
	}, [isActivePickButton]);

	return (
		<aside>
			<ControlPanel filterValue={filterValue} setFilterValue={setFilterValue} />
			<div className={style.asidePatientsInfo}>
				<div className={style.counterWrapper}>{renderCounter()}</div>
				{!isActivePickButton ? (
					<button onClick={() => setIsActivePickButton(true)}>Выбрать</button>
				) : (
					<div className={style.groupButton}>
						<button onClick={deletePatient}>Удалить</button>
						<button onClick={() => setIsActivePickButton(false)}>Отменить</button>
					</div>
				)}
			</div>
			{filterValue ? (
				<ul className={style.asideList}>
					{patientState.filteredPatients.map(patient => (
						<li key={patient.id}>
							<PatientCard
								id={patient.id}
								pickedPatients={pickedPatientIds}
								isActivePickButton={isActivePickButton}
								name={patient.name}
								surname={patient.surname}
								img={patient.img}
								onClick={() => choosePatient(patient.id)}
							/>
						</li>
					))}
				</ul>
			) : (
				<ul className={style.asideList}>
					{patientState.patients.map(patient => (
						<li key={patient.id}>
							<PatientCard
								id={patient.id}
								pickedPatients={pickedPatientIds}
								isActivePickButton={isActivePickButton}
								name={patient.name}
								surname={patient.surname}
								img={patient.img}
								onClick={() => choosePatient(patient.id)}
							/>
						</li>
					))}
				</ul>
			)}
		</aside>
	);
};
