import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { patients } from "../../mock/patients";
import { INote, IPatient } from "../../types/general";

type State = {
	choosenPatient: IPatient | null;
	patients: IPatient[];
	filteredPatients: IPatient[];
};

const initialState: State = {
	choosenPatient: null,
	patients: patients,
	filteredPatients: [],
};

const PatientSlice = createSlice({
	name: "patient",
	initialState,
	reducers: {
		addPatient: (state, action: PayloadAction<IPatient>) => {
			state.patients.push(action.payload);
		},
		setPatients: (state, action: PayloadAction<IPatient[]>) => {
			state.patients = action.payload;
		},
		setChoosen: (state, action: PayloadAction<IPatient | null>) => {
			state.choosenPatient = action.payload;
		},
		setFilteredPatients: (state, action: PayloadAction<IPatient[]>) => {
			state.filteredPatients = action.payload;
		},
		addNote: (state, action: PayloadAction<INote>) => {
			state.patients = state.patients.map(patient => {
				if (patient.id === state.choosenPatient?.id) {
					state.choosenPatient = patient;
					patient.notes.push(action.payload);
				}
				return patient;
			});
		},
		deleteNote: (state, action: PayloadAction<string>) => {
			state.patients = state.patients.map(patient => {
				if (patient.id === state.choosenPatient?.id) {
					state.choosenPatient = patient;
					patient.notes = patient.notes.filter(note => note.id !== action.payload);
				}
				return patient;
			});
		},
		changeNote: (state, action: PayloadAction<{ id: string; text: string }>) => {
			state.patients = state.patients.map(patient => {
				if (patient.id === state.choosenPatient?.id) {
					state.choosenPatient = patient;
					patient.notes = patient.notes.map(note => {
						if (note.id === action.payload.id) {
							return { ...note, text: action.payload.text };
						} else return note;
					});
				}
				return patient;
			});
		},
	},
});

export const {
	addPatient,
	setPatients,
	setChoosen,
	setFilteredPatients,
	addNote,
	deleteNote,
	changeNote,
} = PatientSlice.actions;
export default PatientSlice.reducer;
