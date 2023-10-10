import { useState, useEffect, useRef } from "react";

import useAppSelector from "../../hooks/useAppDispatch";
import useAppDispatch from "../../hooks/useAppSelector";
import { setPatients, setFilteredPatients } from "../../redux/patient/patientSlice";
import { toggle } from "../../redux/modal/modalSlice";
import { getPatientState } from "../../redux/patient/patientSelector";

import { patients } from "../../mock/patients";
import { Plus, Sort, Loupe } from "../../assets/icons";

import style from "./ControlPanel.module.css";

interface IControlPanel {
	filterValue: string;
	setFilterValue: (value: string) => void;
}

export const ControlPanel = ({ filterValue, setFilterValue }: IControlPanel) => {
	const dispatch = useAppDispatch();
	const patientState = useAppSelector(getPatientState);
	const [isInput, setIsInput] = useState(false);
	const [isAscend, setIsAscend] = useState<boolean>(false);
	const searchInput = useRef<HTMLInputElement>(null);
	const searchContainer = useRef<HTMLSpanElement>(null);

	const filterPatients = (name: string) => {
		setFilterValue(name);
		const filteredPatients = patientState.patients.filter(patient =>
			(patient.name + " " + patient.surname).toLowerCase().includes(name.toLowerCase())
		);
		dispatch(setFilteredPatients(filteredPatients));
	};

	const sortPatients = () => {
		const sorteredPatientsAscend = [...patientState.patients].sort((a, b) => {
			const nameA = a.name.toLocaleLowerCase();
			const nameB = b.name.toLowerCase();
			if (nameA < nameB) {
				return -1;
			} else if (nameA > nameB) {
				return 1;
			} else return 0;
		});

		const sorteredPatientsDescend = [...patientState.patients].sort((a, b) => {
			const nameA = a.name.toLocaleLowerCase();
			const nameB = b.name.toLowerCase();
			if (nameA > nameB) {
				return -1;
			} else if (nameA < nameB) {
				return 1;
			} else return 0;
		});

		dispatch(setPatients(isAscend ? sorteredPatientsAscend : sorteredPatientsDescend));
		setIsAscend(!isAscend);
	};

	useEffect(() => {
		document.addEventListener("mousedown", e => {
			if (searchContainer.current && !searchContainer.current.contains(e.target as Node)) {
				setIsInput(false);
			}
		});
	}, [searchContainer]);

	useEffect(() => {
		setTimeout(() => {
			isInput && searchInput.current?.focus();
		}, 570);
		if (!isInput) {
			if (searchInput.current) {
				setFilterValue("");
				dispatch(setPatients(patientState.patients));
			}
		}
	}, [isInput]);

	return (
		<div className={style.panelContainer}>
			<span
				ref={searchContainer}
				className={!isInput ? style.searchContainer__closed : style.searchContainer__opened}
				onClick={() => setIsInput(true)}
			>
				<Loupe />
				<input
					value={filterValue}
					className={style.search}
					onChange={e => filterPatients(e.target.value)}
					type="text"
					ref={searchInput}
				/>
			</span>
			<div className={style.buttonGroup}>
				<button className={style.sort} onClick={sortPatients}>
					<Sort />
				</button>
				<button type="button" onClick={() => dispatch(toggle(true))} className={style.add}>
					<Plus />
				</button>
			</div>
		</div>
	);
};
