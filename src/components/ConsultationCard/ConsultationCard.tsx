import { Camera, Meet } from "../../assets/icons";

import { IConsultation } from "../../types/general";

import style from "./ConsultationCard.module.css";

export const ConsultationCard = ({ title, date, status, type }: Omit<IConsultation, "id">) => {
    return (
        <li className={style.tabCard}>
            {type === "calling" ? <Camera /> : <Meet />}
            <div className={style.info}>
                <p>{title}</p>
                <p className={style.date}>{date}</p>
            </div>
            <p className={style.status}>{!status && "Не подтверждена"}</p>
        </li>
    )
};