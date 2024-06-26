import React from "react";
import { useAppDispatch } from "../utils/appStore";
import { removeEmployee } from "../utils/employeeListSlice";
import { addInfo } from "../utils/employeeInfoSlice";

interface Employee {
  id: number;
  name: string;
  email: string;
  address: string;
  contact: string;
  DOB: string;
}

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const { name, id } = { ...employee };
  const dispatch = useAppDispatch();
  return (
    <div
      className="bg-neutral-300 rounded-lg py-1 px-3 my-1 flex justify-between items-center cursor-pointer"
      onClick={() => dispatch(addInfo(employee))}
    >
      <div className="font-semibold">{name}</div>
      <button
        className="text-red-500 font-extrabold text-[18px] italic"
        onClick={() => dispatch(removeEmployee(id))}
      >
        X
      </button>
    </div>
  );
};

export default EmployeeCard;
