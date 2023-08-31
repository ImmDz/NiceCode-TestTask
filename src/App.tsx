import { useState, useEffect, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { PatientCard } from "./components/PatientCard/PatiendCard";
import { patients } from "./mocks/patients";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { PatientList } from "./components/PatientList/PatientList";
import { NavBar } from "./components/NavBar/NavBar";
import { CategoryList } from "./components/CategoryList/CategoryList";
import { ActivePatientCard } from "./components/ActivePatientCard/ActivePatientCard";

import type { INoteCard, ActivePatient, IPatient, ModalState } from "./types/general";


import "./global.css";
import style from "./App.module.scss";

//Глобальное состояние для dropdown
export const DropDownState = createContext<ModalState | null>(null);
//Глобальное состояние для выбранного пациента
export const ActivePatientState = createContext<ActivePatient | null>(null);

export const App = () => {
    const [notes, setNotes] = useState<INoteCard[]>([]);
    const [currentPatients, setCurrentPatients] = useState<IPatient[]>([]);
    const [chosenPatients, setChosenPatients] = useState<number[]>([]);
    const [activePatient, setActivePatient] = useState<number>(0);
    const [isActivePickButton, setIsActivePickButton] = useState<boolean>(false);
    const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<number>(0);
    const [modalId, setModalId] = useState<number | null>(null);
    const [isAscend, setIsAscend] = useState<boolean>(false);

    const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxChange = (patientId: number) => {
        if (chosenPatients.includes(patientId)) {
            setChosenPatients(chosenPatients.filter(id => id !== patientId));
        } else {
            setChosenPatients((prev) => [...prev, patientId]);
        }
    };

    const handleDeleteNote = (id: number) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    const changeNoteContent = (id: number, newText: string) => {
        const updatedNotes = notes.map((note) => {
            return note.id === id ? { ...note, text: newText } : note;
        });
        setNotes(updatedNotes);
    };

    const renderPickButton = () => {
        return !isActivePickButton ?
            <button onClick={() => setIsActivePickButton(!isActivePickButton)}>Выбрать</button> :
            <div className={style.panelInteraction}>
                <button>Действия</button>
                <button onClick={() => setIsActivePickButton(!isActivePickButton)}>Отменить</button>
            </div>
    };

    const renderActivePatientCard = () => {
        return patients.filter((patient) => patient.id === activePatient).map((item) =>
            <ActivePatientCard
                key={uuidv4()}
                name={item.name}
                img={item.img}
                age={item.age}
                gender={item.gender}
                activeCard={activePatient}
            />)
    };

    const sortPatients = () => {
        const sorteredPatientsAscend = [...patients].sort((a, b) => {
            const nameA = a.name.toLocaleLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) {
                return -1;
            } else if (nameA > nameB) {
                return 1;
            } else return 0
        });

        const sorteredPatientsDescend = [...patients].sort((a, b) => {
            const nameA = a.name.toLocaleLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA > nameB) {
                return -1;
            } else if (nameA < nameB) {
                return 1;
            } else return 0
        });

        setCurrentPatients(isAscend ? sorteredPatientsAscend : sorteredPatientsDescend);
        setIsAscend(!isAscend);
    };

    const filterPatients = (name: string) => {
        const filteredPatients = patients.filter((patient) => patient.name.toLowerCase().includes(name.toLowerCase()));
        setCurrentPatients(() => name.trim().length ? filteredPatients : patients);
    };

    const getPatientsLength = (): number => {
        return !isActivePickButton ? patients.length : chosenPatients.length
    };

    useEffect(() => {
        setActivePatient(patients[0].id)
    }, []);

    useEffect(() => {
        currentPatients.map((patient) => patient.id === activePatient && setNotes(patient.notes))
    }, [activePatient]);

    useEffect(() => {
        setCurrentPatients(patients);
    }, [patients]);

    useEffect(() => {
        setIsAllSelected(false);
        isActivePickButton && setChosenPatients([]);
    }, [isActivePickButton]);

    useEffect(() => {
        setChosenPatients([]);
        patients.map((item) => setChosenPatients((prev) => isAllSelected ? [...prev, item.id] : []))
    }, [isAllSelected]);

    return (
        <DropDownState.Provider value={{ modalId, setModalId }} >
            <ActivePatientState.Provider value={{ patientId: activePatient, setPatientId: setActivePatient }}>
                <header></header>
                <div className={style.wrapper}>
                    <div className={style.container}>
                        <aside>
                            <ControlPanel
                                toggle={(value: boolean) => setIsOpen(value)}
                                sort={sortPatients}
                                isOpen={isOpen}
                                onSearch={filterPatients} />
                            <div className={style.panelInfo}>
                                <div className={style.countGroup}>
                                    {isActivePickButton && <input className={style.checkbox} type="checkbox" onChange={() => setIsAllSelected(!isAllSelected)} checked={isAllSelected} />}
                                    <span id={style.count} className={!isActivePickButton ? style.count__inactive : style.count__active}>{getPatientsLength()}</span>
                                </div>
                                {renderPickButton()}
                            </div>
                            <PatientList
                                patients={currentPatients}
                                setActive={setActivePatient}
                                isActivePickButton={isActivePickButton}
                                handleCheckboxChange={handleCheckboxChange}
                                chosenPatients={chosenPatients}
                            />
                        </aside>
                        <main>
                            {renderActivePatientCard()}
                            <NavBar setActiveTab={setActiveTab} activeTab={activeTab} add={() => setNotes((prevNotes) => [...prevNotes, { id: uuidv4(), text: "", img: "" }])} />
                            <div className={style.tabContent}>
                                <CategoryList notes={notes} changeNoteContent={changeNoteContent} deleteNote={handleDeleteNote} categoryId={activeTab} patientId={activePatient} />
                            </div>
                        </main>
                    </div>
                </div>
            </ActivePatientState.Provider>
        </DropDownState.Provider>
    )
};