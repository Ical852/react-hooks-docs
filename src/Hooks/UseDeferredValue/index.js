import React, { useDeferredValue, useState } from "react";

const UseDeferredValuePage = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState(0);

  const deferredName = useDeferredValue(name);
  const deferredJob = useDeferredValue(job);
  const deferredSalary = useDeferredValue(salary);

  return (
    <div className="mt-3">
      <h5 className="mb-3">Use Deferred Value</h5>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={deferredName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Job
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={deferredJob}
            onChange={(e) => setJob(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Salary
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            value={deferredSalary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            console.log(
              `name : ${deferredName}, job: ${deferredJob}, salary: $${deferredSalary}`
            );
          }}
        >
          Submit
        </button>
      </form>

      <div className="mt-5">
        <div>Full Name : {deferredName}</div>
        <div>Job : {deferredJob}</div>
        <div>Salary : ${deferredSalary}</div>
      </div>
    </div>
  );
};

export default UseDeferredValuePage;
