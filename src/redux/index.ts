import { combineReducers, configureStore } from "@reduxjs/toolkit";
import patientSlice from "./patient/patientSlice";
import dropdownSlice from "./dropdown/dropdownSlice";
import modalSlice from "./modal/modalSlice";

const reducers = combineReducers({
  patientSlice,
  dropdownSlice,
  modalSlice,
});

const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export { store };
