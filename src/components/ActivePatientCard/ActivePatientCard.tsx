import { useContext, useEffect } from "react";
import { ActivePatientState } from "../../App";
import { DropDownState } from "../../App";
import { DropDown } from "../DropDown/DropDown";
import ellipsis from "../../assets/ellipsis.svg";
import type { IActivePatientCard } from "../../types/general";

import style from "./ActivePatientCard.module.scss";

export const ActivePatientCard = ({ name, age, gender, img }: IActivePatientCard) => {
    const activePatientId = useContext(ActivePatientState)!.patientId;
    const setModalId = useContext(DropDownState)?.setModalId;
    const modalId = useContext(DropDownState)?.modalId;

    return (
        <div id={style.patient} className={style.patient}>
            <div className={style.patientPhoto}>
                <img src={img} alt="" />
            </div>
            <div className={style.info}>
                <p>{name}</p>
                <p>{`${age} лет, ${gender}`}</p>
            </div>
            <div className={style.interaction}>
                <span
                    className={modalId !== activePatientId ? style.dropDownContainer : style.dropDownContainer__active}
                    onClick={() => setModalId!(modalId !== activePatientId ? activePatientId : null)}><img src={ellipsis} alt="" />
                    <DropDown noteId={activePatientId} />
                </span>
            </div>
        </div>
    )
}