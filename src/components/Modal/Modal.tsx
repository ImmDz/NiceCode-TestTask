import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import nofoto from "../../assets/patientFoto/nofoto.png";
import cross from "../../assets/icons/cross.svg";

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
        age: undefined,
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
    } = useForm<IPatient>({
        defaultValues: defaultPatient,
        mode: "all",
        delayError: 300,
    });

    const submitHandler = () => {
        setValue("id", uuidv4());
        dispatch(addPatient(control._formValues as IPatient));
        reset();
        dispatch(toggle(false));
    };

    return (
        <dialog className={style.modalWrapper} open={isOpen}>
            <div className={style.modalContainer}>
                <h3>Добавить пациента</h3>
                <span className={style.cross} onClick={() => dispatch(toggle(false))}>
                    <img src={cross} alt="Закрыть" />
                </span>
                <form className={style.modalForm} action="" onSubmit={handleSubmit(submitHandler)}>
                    <input
                        required
                        type="text"
                        placeholder="Имя"
                        {...register("name")} />
                    <input
                        required
                        type="text"
                        placeholder="Фамилия"
                        {...register("surname")} />
                    <input
                        required
                        type="number"
                        placeholder="Возраст"
                        {...register("age")} />
                    <div className={style.genderPart}>
                        <p className={style.genderPartTitle}>Пол:</p>
                        <label htmlFor="male">
                            <input id="male" type="radio" value="муж" required {...register("gender")} />
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
    )
};