import { useRef, useEffect } from "react";
import { ISearchInput } from "../../types/general";

import style from "./SearchInput.module.scss";
import { Glass } from "../../assets/Glass";

export const SearchInput = ({ isOpen, toggle, filter }: ISearchInput) => {
    const search = useRef<HTMLInputElement>(null);

    useEffect(() => {
        isOpen && search.current?.focus();
        if (!isOpen) {
            if (search.current) {
                search.current.value = "";
            }
        }
        !isOpen && filter("");
    }, [isOpen]);

    return (
        <div className={!isOpen ? style.searchContainer__closed : style.searchContainer__opened}>
            <span className={style.glass} onClick={() => toggle!(true)}>
                <Glass />
            </span>
            <input type="text" ref={search} onChange={(e) => filter(e.target.value)} />
        </div>
    )
}