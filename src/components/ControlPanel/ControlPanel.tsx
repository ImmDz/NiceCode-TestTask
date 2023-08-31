import { PanelButton } from "../PanelButton/PanelButton";
import type { IControlPanel } from "../../types/general";
import { FilterIcon } from "../../assets/FilterIcon";
import { Plus } from "../../assets/Plus";
import { SearchInput } from "../SearchInput/SearchInput";

import style from "./ControlPanel.module.scss";

export const ControlPanel = ({ onSearch, isOpen, toggle, sort }: IControlPanel) => {

    return (
        <div className={style.panel}>
            <div className={style.panel__controls}>
                <SearchInput filter={onSearch} isOpen={isOpen} toggle={toggle}/>
                <div className={style.rightSideGroup}>
                    {!isOpen && <PanelButton onClick={sort} sort={sort} icon={<FilterIcon />} />}
                    <PanelButton onClick={() => toggle(false)} isOpen={isOpen} icon={<Plus />} />
                </div>
            </div>
        </div>
    )
}