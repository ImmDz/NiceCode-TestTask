import { useContext } from "react";

import telegram from "../../assets/talegram.svg";
import mod from "../../assets/Mod.svg";
import type { IPatientCard } from "../../types/general";
import { ActivePatientState } from "../../App";

import style from "./PatiendCard.module.scss";

export const PatientCard = ({ id, name, age, gender, img, icon, activeCard, isActivePickButton, chosenPatients, onChange, setActive }: IPatientCard) => {
    const activePatient = useContext(ActivePatientState)?.patientId;

    const setNotificationImg = () => {
        if (icon === telegram) {
            return telegram;
        } else if (icon === mod) {
            return mod;
        }
    };

    const setStyleName = () => {
        if (icon === telegram) {
            if (id === activePatient) {
                return style.patient__active + " " + style.notification;
            } else return style.patient + " " + style.notification;
        } else if (id === activePatient) {
            return style.patient__active;
        } else return style.patient;
    };

    return (
        <div className={setStyleName()} onClick={() => setActive(id)}>
            {isActivePickButton && <input type="checkbox" onChange={onChange} checked={chosenPatients!.includes(id)} />}
            <div className={style.patientPhoto}>
                <img src={img} alt="" />
            </div>
            <div className={style.info}>
                <p>{name}</p>
                {activeCard === id && <p>{`${age} лет, ${gender}`}</p>}
            </div>
            <div className={style.interaction}>
                <img src={setNotificationImg()} alt="" />
            </div>
        </div>
    )
};