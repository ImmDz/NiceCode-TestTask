
import { IVideo } from "../../types/general";

import style from "./VideoCard.module.css";

export const VideoCard = ({ title, author, date, img }: Omit<IVideo, "id">) => {
    return (
        <li className={style.tabCard}>
            <img src={img} alt="video-preview" />
            <div className={style.info}>
                <p>{title}</p>
                <p className={style.author}>{author}</p>
            </div>
            <p className={style.date}>{date}</p>
        </li>
    )
};