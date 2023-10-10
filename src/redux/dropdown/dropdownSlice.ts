import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
	idOpenedMenu: string;
	idEditableNote: string;
};

const initialState: State = {
	idOpenedMenu: "",
	idEditableNote: "",
};

const DropdownSlice = createSlice({
	name: "dropdown",
	initialState,
	reducers: {
		setIdMenu: (state, action: PayloadAction<string>) => {
			action.payload !== state.idOpenedMenu
				? (state.idOpenedMenu = action.payload)
				: (state.idOpenedMenu = "");
		},
		setIdNote: (state, action: PayloadAction<string>) => {
			state.idEditableNote = action.payload;
		},
	},
});

export const { setIdMenu, setIdNote } = DropdownSlice.actions;
export default DropdownSlice.reducer;
