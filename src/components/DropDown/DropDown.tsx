import { useContext } from "react";

import { IDropDown } from "../../types/general";
import { DropDownState } from "../../App";
import { ActivePatientState } from "../../App";

import style from "./DropDown.module.scss";

export const DropDown = ({ noteId, change, deleteNote }: IDropDown) => {
    const content = ["Изменить", "Удалить"];
    const modalId = useContext(DropDownState)?.modalId;
    const activePatientId = useContext(ActivePatientState)?.patientId;

    const setStyleName = () => {
        if (noteId === modalId && modalId !== null) {
            return style.dropdownList + " " + style.visible;
        } else return style.dropdownList + " " + style.hidden;
    };

    return (
        <ul className={setStyleName()} >
            {content.map((item, index) => <li key={index} onClick={activePatientId !== modalId ? item === "Изменить" ? change : () => deleteNote!(noteId!) : undefined}>{item}</li>)}
        </ul>
    )
}