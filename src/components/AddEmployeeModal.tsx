import React, { FormEvent } from "react";
import { useAppDispatch } from "../utils/appStore";
import { addEmployee } from "../utils/employeeListSlice";

interface AddEmployeeModalProps {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddEmployeeModal: React.FC<AddEmployeeModalProps> = ({
  setIsModalVisible,
}) => {
  const dispatch = useAppDispatch();
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: { [key: string]: FormDataEntryValue | null } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    dispatch(addEmployee(data));
    setIsModalVisible(false);
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <h2 className="text-center mb-2 text-[18px]">Add a new Employee</h2>
        <form className="flex flex-col" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="inputBox"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL(Optional)"
            className="inputBox"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="inputBox"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="inputBox"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            className="inputBox"
          />
          <input type="date" name="DOB" className="inputBox" />
          <button className="bg-neutral-400 mt-3 py-1 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
