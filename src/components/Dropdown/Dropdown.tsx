import useAppDispatch from "../../hooks/useAppSelector";
import useAppSelector from "../../hooks/useAppDispatch";
import { deleteNote } from "../../redux/patient/patientSlice";
import { setIdNote } from "../../redux/dropdown/dropdownSlice";
import { getDropdownState } from "../../redux/dropdown/dropdownSelector";

import { IDropdown } from "../../types/general";

import style from "./Dropdown.module.css";

enum ButtonNames {
	DELETE = "Удалить",
	CHANGE = "Изменить",
}

export const Dropdown = ({ content }: IDropdown) => {
	const dispatch = useAppDispatch();
	const dropdownState = useAppSelector(getDropdownState);

	const handleMenuClick = (buttonName: string) => {
		switch (buttonName) {
			case ButtonNames.DELETE:
				dispatch(deleteNote(dropdownState.idOpenedMenu));
				break;
			case ButtonNames.CHANGE:
				dispatch(setIdNote(dropdownState.idOpenedMenu));
				break;
		}
	};

	return (
		<div className={style.dropdownContainer}>
			{content.map((item, index) => (
				<button onClick={() => handleMenuClick(item)} className={style.dropdownButton} key={index}>
					{item}
				</button>
			))}
		</div>
	);
};
