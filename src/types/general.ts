import { ReactNode, SetStateAction, Dispatch } from "react";

export type ModalState = {
  modalId: number | null;
  setModalId: Dispatch<SetStateAction<number | null>>;
};

export type ActivePatient = {
  patientId: number;
  setPatientId: Dispatch<SetStateAction<number>>;
};

export interface IPatient {
  id: number;
  name: string;
  img: string;
  icon: string | undefined,
  age: number;
  gender: string;
  notes: INoteCard[];
  consultations: IConsultation[];
  videos: IVideo[];
  events: IEvent[];
}

export interface IPatientCard {
  id: number;
  name: string;
  img: string;
  icon: string;
  activeCard?: number;
  gender: string;
  age: number;
  isActivePickButton?: boolean;
  chosenPatients?: number[];
  onClick?: () => void;
  onChange?: () => void;
  setActive: (id: number) => void;
}

export interface IActivePatientCard {
  name: string;
  img: string;
  activeCard?: number;
  gender: string;
  age: number;
  isActivePickButton?: boolean;
  chosenPatients?: number[];
  onClick?: () => void;
  onChange?: () => void;
}

export interface INoteCard {
  id: number;
  text: string;
  img?: string;
  edit?: (id: number, newText: string) => void;
  deleteNote?: (id: number) => void;
}

export interface IPatientList {
  setActive: (id: number) => void;
  handleCheckboxChange: (id: number) => void;
  isActivePickButton: boolean;
  chosenPatients: number[];
  patients: IPatient[];
}

export interface INavBar {
  activeTab: number;
  setActiveTab: (id: number) => void;
  add: () => void;
}

export interface INavList {
  activeTab: number;
  setActiveTab: (id: number) => void;
}

export interface ICategoryCard {
  id: number;
  title: string;
  author: string;
  date: string;
  status: boolean;
  time: string;
  type: string;
  text: string;
  icon: ReactNode;
  categoryId: number;
  activeCardId: number | null;
  img: string;
  setActive: (id: number) => void;
}

export interface ICategoryList {
  patientId: number;
  categoryId: number;
  changeNoteContent: (id: number, newText: string) => void;
  notes: INoteCard[];
  deleteNote: (id: number) => void;
}

export interface IConsultation {
  id: number;
  title: string;
  date: string;
  status: boolean;
}
export interface IVideo {
  id: number;
  title: string;
  date: string;
  author: string;
}
export interface IEvent {
  id: number;
  title: string;
  type: string;
  date: string;
  time: string;
}

export interface IDropDown {
  noteId?: number, 
  patientId?: number, 
  change?: () => void, 
  deleteNote?: (id: number) => void
}

export interface IControlPanel {
  onSearch: (value: string) => void;
  isOpen: boolean;
  toggle: (value: boolean) => void;
  sort: () => void;
}

export interface IPanelButton {
  icon: ReactNode;
  isOpen?: boolean;
  onClick: () => void;
  toggle?: (value: boolean) => void;
  sort?: () => void;
}

export interface ISearchInput {
  isOpen: boolean;
  toggle?: (value: boolean) => void;
  filter: (value: string) => void;
  onClick?: () => void;
}
