import React, { useRef, useState } from "react";

const UseRefPage = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState(0);

  const nameRef = useRef();
  const jobRef = useRef();
  const salaryRef = useRef();

  return (
    <div className="mt-3">
      <h5 className="mb-3">Use Ref</h5>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            ref={nameRef}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Job
          </label>
          <input
            ref={jobRef}
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Salary
          </label>
          <input
            ref={salaryRef}
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => nameRef.current.focus()}
        >
          Focus Name
        </button>
        <button
          type="button"
          class="btn btn-success mx-2"
          onClick={() => jobRef.current.focus()}
        >
          Focus Job
        </button>
        <button
          type="button"
          class="btn btn-info"
          onClick={() => salaryRef.current.focus()}
        >
          Focus Salary
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

export default UseRefPage;
