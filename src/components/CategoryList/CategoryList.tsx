import { useState } from "react";

import { CategoryCard } from "../CategoryCard/CategoryCard";
import { NoteCard } from "../NoteCard/NoteCard";
import { patients } from "../../mocks/patients";
import type { ICategoryList } from "../../types/general";

import style from "./CategoryList.module.scss";

export const CategoryList = ({ patientId, categoryId, changeNoteContent, deleteNote, notes }: ICategoryList) => {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const getPatient = () => {
        return patients.find((patient) => patient.id === patientId);
    };
    const getConsultation = () => {
        return getPatient()?.consultations;
    };
    const getVideos = () => {
        return getPatient()?.videos;
    };
    const getEvents = () => {
        return getPatient()?.events;
    };

    const renderCardByCategory = () => {
        switch (categoryId) {
            case 0:
                return notes.map((category) => <li key={category.id}><NoteCard deleteNote={deleteNote} text={category.text} id={category.id} img={category.img} edit={changeNoteContent} /></li>)
            case 1:
                return getConsultation()?.map((category) => <li key={category.id}><CategoryCard setActive={setActiveCard} activeCardId={activeCard} id={category.id} title={category.title} date={category.date} status={category.status} icon={<category.icon />} categoryId={categoryId} /></li>)
            case 2:
                return getVideos()?.map((category) => <li key={category.id}><CategoryCard setActive={setActiveCard} activeCardId={activeCard} id={category.id} title={category.title} date={category.date} author={category.author} categoryId={categoryId} img={category.img} /></li>)
            case 3:
                return getEvents()?.map((category) => <li key={category.id}><CategoryCard setActive={setActiveCard} activeCardId={activeCard} id={category.id} title={category.title} type={category.type} date={category.date} time={category.time} img={category.img} categoryId={categoryId} /></li>)
        };
    };

    return (
        <ul className={style.categoryList}>
            {renderCardByCategory()}
        </ul>
    )
}