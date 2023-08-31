import { navbarArray } from "../../mocks/navArr";
import { INavList } from "../../types/general";

import style from "./NavList.module.scss";

export const NavList = ({ activeTab, setActiveTab }: INavList) => {
    return (
        <ul className={style.navList}>
            {navbarArray.map((item, index) =>
                <li onClick={() => setActiveTab(index)} key={index}>
                    <p className={activeTab !== index ? style.tabName : style.tabName__active}>{item}
                    </p>
                </li>)}
        </ul>
    )
}