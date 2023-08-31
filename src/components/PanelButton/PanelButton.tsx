import { IPanelButton } from "../../types/general"

import style from "./PanelButton.module.scss";

export const PanelButton = ({ icon, isOpen, onClick }: IPanelButton) => {

    return (
        <span onClick={onClick} className={!isOpen ? style.button : style.button__cross}>
            {icon}
        </span>
    )
}