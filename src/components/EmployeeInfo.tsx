import React from "react";
import { useAppSelector } from "../utils/appStore";

function EmployeeInfo() {
  const employeeInfo = useAppSelector((el) => el.employeeDetails.info);
  const { name, image, email, address, contact, DOB } = { ...employeeInfo };
  return (
    <div className="p-2 w-2/3 overflow-auto flex flex-col  items-center">
      <h3 className="text-[18px] w-full border-b border-black text-center font-semibold">
        Employee Information
      </h3>
      {employeeInfo && (
        <div className="flex flex-col justify-center items-center flex-1">
          <img
            src={
              image
                ? image
                : "https://tse1.mm.bing.net/th?id=OIP.zCAXDuwn_eW3SyVWfZueyQHaJ4&pid=Api&rs=1&c=1&qlt=95&w=75&h=100"
            }
            alt="profile_image"
            className="w-36 h-36 rounded-full object-cover"
          />
          <h2 className="text-[18px] font-semibold mb-2">{name}</h2>
          <p className="text-[14px]">{address}</p>
          <p className="text-[14px]">{email}</p>
          <p className="text-[14px]">Contact no - {contact}</p>
          <p className="text-[14px]">DOB - {DOB}</p>
        </div>
      )}
    </div>
  );
}

export default EmployeeInfo;
