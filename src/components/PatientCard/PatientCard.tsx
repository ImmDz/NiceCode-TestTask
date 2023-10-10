import { IPatientCard } from "../../types/general";

import style from "./PatientCard.module.css";

export const PatientCard = ({
	id,
	name,
	surname,
	img,
	pickedPatients,
	isActivePickButton,
	onClick,
}: IPatientCard) => {
	return (
		<div className={style.cardContainer} onClick={onClick}>
			{isActivePickButton && (
				<input type="checkbox" checked={pickedPatients.includes(id)} readOnly />
			)}
			<div className={style.cardFoto}>
				<img src={img} alt="foto" />
			</div>
			<p>
				{name} {surname}
			</p>
		</div>
	);
};
