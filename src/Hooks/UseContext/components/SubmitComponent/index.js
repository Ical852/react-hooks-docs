import React, { useContext } from "react";
import { PageContext } from "../../context";

const SubmitComponent = () => {
  const context = useContext(PageContext);
  const { data } = context;
  const { name, job, salary } = data;

  return (
    <div className="mt-5">
      <div>Full Name : {name}</div>
      <div>Job : {job}</div>
      <div>Salary : ${salary}</div>
    </div>
  );
};

export default SubmitComponent;
