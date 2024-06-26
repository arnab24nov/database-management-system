import React from "react";
import EmployeeCard from "./EmployeeCard";
import { useAppSelector } from "../utils/appStore";

function EmployeeList() {
  const employees = useAppSelector((em) => em.employees.employeeList);
  return (
    <div className="p-2 border-r-2 border-black w-1/3 overflow-auto">
      <h3 className="text-[18px] border-b border-black text-center font-semibold">
        Employee List
      </h3>
      <div>
        {employees?.map((el) => (
          <EmployeeCard key={el.id} employee={el} />
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
