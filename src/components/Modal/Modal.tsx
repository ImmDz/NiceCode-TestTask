import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import nofoto from "../../assets/patientFoto/nofoto.png";
import cross from "../../assets/icons/cross.svg";
import { Input } from "../Input/Input";
import { namePattern } from "../../utils/validationPatterns";
import { formHelpers } from "../../utils/formHelpers";

import useAppDispatch from "../../hooks/useAppSelector";
import { toggle } from "../../redux/modal/modalSlice";
import { addPatient } from "../../redux/patient/patientSlice";

import { IPatient, IModal } from "../../types/general";

import style from "./Modal.module.css";

export const Modal = ({ isOpen }: IModal) => {
	const dispatch = useAppDispatch();
	const defaultPatient = {
		id: uuidv4(),
		name: "",
		surname: "",
		img: nofoto,
		icon: "",
		age: 0,
		gender: "",
		notes: [],
		consultations: [],
		videos: [],
		events: [],
	};

	const {
		handleSubmit,
		reset,
		control,
		register,
		setValue,
		formState: { isValid, errors },
	} = useForm<IPatient>({
		defaultValues: defaultPatient,
		mode: "all",
		delayError: 300,
	});

	const submitHandler = () => {
		if (isValid) {
			setValue("id", uuidv4());
			dispatch(addPatient(control._formValues as IPatient));
			reset();
			dispatch(toggle(false));
		}
	};

	return (
		<dialog className={style.modalWrapper} open={isOpen}>
			<div className={style.modalContainer}>
				<h3 className={style.formTitle}>Добавить пациента</h3>
				<span className={style.cross} onClick={() => dispatch(toggle(false))}>
					<img src={cross} alt="Закрыть" />
				</span>
				<form className={style.modalForm} action="" onSubmit={handleSubmit(submitHandler)}>
					<label>
						<p className={style.inputTitle}>*Имя</p>
						<Input
							name={"name"}
							control={control}
							rules={{ pattern: namePattern, minLength: 2, maxLength: 15, required: true }}
						/>
						<p className={style.message}>{formHelpers.getNameError(errors)}</p>
					</label>
					<label>
						<p className={style.inputTitle}>*Фамилия</p>
						<Input
							name={"surname"}
							control={control}
							rules={{ minLength: 2, maxLength: 15, pattern: namePattern, required: true }}
						/>
						<p className={style.message}>{formHelpers.getSurnameError(errors)}</p>
					</label>
					<label>
						<p className={style.inputTitle}>*Возраст</p>
						<Input
							name={"age"}
							control={control}
							type="number"
							rules={{ required: true, min: 12, max: 120 }}
						/>
						<p className={style.message}>{formHelpers.getAgeError(errors)}</p>
					</label>
					<div className={style.genderPart}>
						<p className={style.genderPartTitle}>Пол:</p>
						<label htmlFor="male">
							<input id="male" defaultChecked type="radio" value="муж" {...register("gender")} />
							мужской
						</label>
						<label htmlFor="female">
							<input id="female" type="radio" value="жен" {...register("gender")} />
							женский
						</label>
					</div>
					<button type="submit">Добавить</button>
				</form>
			</div>
		</dialog>
	);
};
