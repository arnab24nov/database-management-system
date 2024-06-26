import { createSlice } from "@reduxjs/toolkit";
import React from "react";

interface Employees {
  id: number;
  name: string;
  image?: string;
  email: string;
  address: string;
  contact: string;
  DOB: string;
}

interface InitialState {
  employeeList: Employees[];
}

const initialState: InitialState = {
  employeeList: [],
};

const employeeListSlice = createSlice({
  name: "employees",
  initialState: initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employeeList.unshift({
        ...action.payload,
        id: Math.random().toString(16).slice(2),
      });
    },
    removeEmployee: (state, action) => {
      state.employeeList = state.employeeList.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

export const { addEmployee, removeEmployee } = employeeListSlice.actions;
export default employeeListSlice.reducer;
