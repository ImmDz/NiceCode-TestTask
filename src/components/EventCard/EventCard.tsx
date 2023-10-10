import { IEvent } from "../../types/general";

import style from "./EventCard.module.css";

export const EventCard = ({ img, title, type, date, time }: Omit<IEvent, "id">) => {
	return (
		<li className={style.tabCard}>
			<img src={img} alt="vebinar-preview" />
			<div className={style.info}>
				<p className={style.titleCard}>{title}</p>
				<div className={style.additional}>
					<p>{type}</p>
					<p>{date}</p>
					<p>{time}</p>
				</div>
			</div>
		</li>
	);
};
