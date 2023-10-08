import { useEffect } from "react";

import { Aside } from "./components/Aside/Aside";
import { Main } from "./components/Main/Main";
import { Modal } from "./components/Modal/Modal";

import useAppDispatch from "./hooks/useAppSelector";
import useAppSelector from "./hooks/useAppDispatch";
import { setChoosen } from "./redux/patient/patientSlice";
import { getPatientState } from "./redux/patient/patientSelector";
import { getModalState } from "./redux/modal/modalSelector";

import "./global.css";

export const App = () => {
    const dispatch = useAppDispatch();
    const patientState = useAppSelector(getPatientState);
    const modalState = useAppSelector(getModalState);

    useEffect(() => {
        dispatch(setChoosen(patientState.patients[0]));
    }, []);

    useEffect(() => {
        if (patientState.patients.length === 0) {
            dispatch(setChoosen(null));
        } else if (!patientState.patients.includes(patientState.choosenPatient!)) {
            dispatch(setChoosen(patientState.patients[0]));
        };
    }, [patientState.patients]);

    return (
        <div className="app">
            <Modal isOpen={modalState.isOpen} />
            <Aside />
            <Main choosenPatient={patientState.choosenPatient} />
        </div>
    )
};