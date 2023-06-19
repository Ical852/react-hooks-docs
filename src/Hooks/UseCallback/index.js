import React, { useCallback, useMemo, useState } from "react";
import { Component1 } from "./components";

const UseCallbackPage = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState(0);

  // memorize render function, no re render on change (optimize performance)
  const setChange = useCallback((setState, value) => {
    setState(value);
  }, []);

  return (
    <div className="mt-3">
      <h5 className="mb-3">Use Callback</h5>
      <form>
        <Component1
          label={"Name"}
          state={name}
          setState={setName}
          setChange={setChange}
        />
        <Component1
          label={"Job"}
          state={job}
          setState={setJob}
          setChange={setChange}
        />
        <Component1
          label={"Salary"}
          state={salary}
          setState={setSalary}
          setChange={setChange}
        />

        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            console.log(`name : ${name}, job: ${job}, salary: $${salary}`);
          }}
        >
          Submit
        </button>
      </form>

      <div className="mt-5">
        <div>Full Name : {name}</div>
        <div>Job : {job}</div>
        <div>Salary : ${salary}</div>
      </div>
    </div>
  );
};

export default UseCallbackPage;
