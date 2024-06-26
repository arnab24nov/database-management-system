import React, { useEffect } from "react";
import EmployeeList from "./EmployeeList";
import EmployeeInfo from "./EmployeeInfo";

const Body: React.FC = () => {
  return (
    <div className="border border-black mx-4 flex h-[500px]">
      <EmployeeList />
      <EmployeeInfo />
    </div>
  );
};

export default Body;
