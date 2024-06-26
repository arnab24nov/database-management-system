import { configureStore } from "@reduxjs/toolkit";
import employeeListSlice from "./employeeListSlice";
import employeeInfoSlice from "./employeeInfoSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const appStore = configureStore({
  reducer: {
    employees: employeeListSlice,
    employeeDetails: employeeInfoSlice,
  },
});

export const useAppDispatch: () => typeof appStore.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof appStore.getState>
> = useSelector;
