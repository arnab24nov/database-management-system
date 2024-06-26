import { createSlice } from "@reduxjs/toolkit";

interface Employee {
  id: number;
  name: string;
  image?: string;
  email: string;
  address: string;
  contact: string;
  DOB: string;
}
interface InitialState {
  info?: Employee;
}
const initialState: InitialState = {
  info: undefined,
};

const employeeInfoSlice = createSlice({
  name: "employee info",
  initialState: initialState,
  reducers: {
    addInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { addInfo } = employeeInfoSlice.actions;
export default employeeInfoSlice.reducer;
