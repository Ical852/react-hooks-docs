import React, { useContext } from "react";
import { PageContext } from "../../context";

const ButtonSubmit = () => {
  const context = useContext(PageContext);
  const { name, job, salary } = context.data;

  return (
    <button
      type="button"
      class="btn btn-primary"
      onClick={() => {
        console.log(`name : ${name}, job: ${job}, salary: $${salary}`);
      }}
    >
      Submit
    </button>
  );
};

export default ButtonSubmit;
