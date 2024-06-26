import React, { useState } from "react";
import AddEmployeeModal from "./AddEmployeeModal";

const Header: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center my-6 mx-4">
      <h1 className="text-[24px] font-bold">Database Management System</h1>
      <button
        className="px-3 py-2 bg-neutral-300 rounded-full"
        onClick={() => setIsModalVisible(true)}
      >
        Add Employee
      </button>

      {isModalVisible && (
        <AddEmployeeModal setIsModalVisible={setIsModalVisible} />
      )}
    </div>
  );
};

export default Header;
