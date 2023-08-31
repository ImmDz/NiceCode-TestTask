import { useState, useRef, useEffect, useContext } from "react";
import ellipsis from "../../assets/ellipsis.svg";
import { DropDown } from "../DropDown/DropDown";
import { DropDownState } from "../../App";

import type { INoteCard } from "../../types/general"

import style from "./NoteCard.module.scss";

export const NoteCard = ({ id, text, img, edit, deleteNote }: INoteCard) => {
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const date = new Date();
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const modalId = useContext(DropDownState)?.modalId;
    const setModalId = useContext(DropDownState)?.setModalId;

    useEffect(() => {
        inputRef.current?.focus();
    }, [isEditable]);

    return (
        <div className={style.noteContainer}>
            <p className={style.date}>{date.toLocaleDateString()}</p>
            <div className={style.note__group}>
                {!isEditable ?
                    <p
                        className={style.note}
                        placeholder="Заполните...">{text}</p> :
                    <textarea
                        onChange={(e) => edit!(id, e.target.value)}
                        className={style.note}
                        placeholder="Заполните..."
                        ref={inputRef}
                        onBlur={() => setIsEditable(false)}
                        rows={3}
                        value={text}>
                    </textarea>
                }
                <span className={modalId !== id ? style.dropDownContainer : style.dropDownContainer__active} onClick={() => setModalId!(modalId !== id ? id : null)}>
                    <img src={ellipsis} alt="" />
                    <DropDown deleteNote={() => deleteNote!(id)} noteId={id} change={() => setIsEditable(!isEditable)}/>
                </span>
            </div>
            {img && <div className={style.attachment}>
                <img src={img} alt="" />
            </div>}
        </div>
    )
}