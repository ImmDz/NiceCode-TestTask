import { v4 as uuid } from "uuid";

import { PatientCard } from "../PatientCard/PatiendCard"
import type { IPatientList } from "../../types/general";

import style from "./PatientList.module.scss";

export const PatientList = ({ patients, setActive, chosenPatients, handleCheckboxChange, isActivePickButton }: IPatientList) => {
    return (
        <ul className={style.patientList}>
            {patients.map((patient) =>
                <li key={uuid()}
                    onClick={() => setActive(patient.id)}>
                    <PatientCard
                        id={patient.id}
                        name={patient.name}
                        img={patient.img}
                        icon={patient.icon || ""}
                        age={patient.age}
                        gender={patient.gender}
                        isActivePickButton={isActivePickButton}
                        setActive={setActive}
                        onChange={() => handleCheckboxChange(patient.id)}
                        chosenPatients={chosenPatients} />
                </li>)}
        </ul>
    )
}