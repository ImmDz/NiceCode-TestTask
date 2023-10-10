import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
	isOpen: boolean;
};

const initialState: State = {
	isOpen: false,
};

const DropdownSlice = createSlice({
	name: "dropdown",
	initialState,
	reducers: {
		toggle: (state, action: PayloadAction<boolean>) => {
			state.isOpen = action.payload;
		},
	},
});

export const { toggle } = DropdownSlice.actions;
export default DropdownSlice.reducer;
