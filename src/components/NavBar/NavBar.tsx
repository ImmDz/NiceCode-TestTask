import { NavList } from "../NavList.tsx/NavList";
import { Plus } from "../../assets/Plus";

import type { INavBar } from "../../types/general";

import style from "./NavBar.module.scss";

export const NavBar = ({ add, activeTab, setActiveTab }: INavBar) => {
    const handlerAddNote = () => {
        activeTab === 0 && add!();
    };

    return (
        <nav>
            <NavList activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className={style.noteButton} onClick={handlerAddNote}>
                <p>Новая заметка</p>
                <span><Plus/></span>
            </div>
        </nav>
    )
};