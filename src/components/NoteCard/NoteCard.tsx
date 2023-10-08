import { useState, useEffect, useRef } from "react";

import { Ellipsis, EllipsisActive } from "../../assets/icons";
import { Dropdown } from "../Dropdown/Dropdown";

import { INote } from "../../types/general";

import useAppDispatch from "../../hooks/useAppSelector";
import useAppSelector from "../../hooks/useAppDispatch";
import { changeNote } from "../../redux/patient/patientSlice";
import { setIdMenu, setIdNote } from "../../redux/dropdown/dropdownSlice";
import { getDropdownState } from "../../redux/dropdown/dropdownSelector";

import style from "./NoteCard.module.css";

export const NoteCard = ({ id, text }: INote) => {
    const dispatch = useAppDispatch();
    const [description, setDescription] = useState(text);
    const menuContent = ["Изменить", "Удалить"];
    const date = new Date();
    const dropdownState = useAppSelector(getDropdownState);
    const editableDescription = useRef<HTMLTextAreaElement>(null);
    const ellipsisContainer = useRef<HTMLDivElement>(null);

    const renderDescription = () => {
        if (dropdownState.idEditableNote !== id) {
            return <p className={style.description}>{description}</p>;
        } else return <textarea ref={editableDescription} value={description} onChange={(e) => setDescription(e.target.value)} />
    };

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if (editableDescription.current && !editableDescription.current.contains(e.target as Node)) {
                dispatch(setIdNote(""));
            };
        });
    }, [editableDescription]);

    useEffect(() => {
        dispatch(setIdMenu(""));
    }, []);

    useEffect(() => {
        dispatch(changeNote({ id, text: description }));
    }, [description]);

    return (
        <li className={style.tabCard}>
            <p className={style.date}>{date.toLocaleDateString()}</p>
            {renderDescription()}
            <div className={style.ellipsis} ref={ellipsisContainer} onClick={() => dispatch(setIdMenu(id))}>
                {dropdownState.idOpenedMenu === id ? <EllipsisActive /> : <Ellipsis />}
                {dropdownState.idOpenedMenu === id && <Dropdown content={menuContent} />}
            </div>
        </li>
    )
};