export interface INote {
  id: string;
  text: string;
  idOpenedMenu?: string;
}

export interface IConsultation {
  id: string;
  title: string;
  date: string;
  status: boolean;
  type: string;
}

export interface IVideo {
  id: string;
  title: string;
  date: string;
  author: string;
  img: string;
}

export interface IEvent {
  id: string;
  title: string;
  type: string;
  date: string;
  time: string;
  img: string;
}

export interface IPatient {
  id: string;
  name: string;
  surname: string;
  img: string;
  icon: string;
  age: number | undefined;
  gender: string;
  notes: INote[];
  consultations: IConsultation[];
  videos: IVideo[];
  events: IEvent[];
}

export interface IPatientCard {
  id: string;
  name: string;
  surname: string;
  img: string;
  isActivePickButton: boolean;
  pickedPatients: string[];
  onClick: () => void;
}

export interface IMain {
  choosenPatient: IPatient | null;
}

export interface IDropdown {
  content: string[];
}

export interface IModal {
  isOpen: boolean;
};
