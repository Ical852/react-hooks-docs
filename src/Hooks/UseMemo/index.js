import React, { useMemo, useState } from "react";

const UseMemoPage = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  // Memorize calculation no more action on re render (optimize performance)
  const [salary, setSalary] = useState(
    useMemo(() => {
      return ((((((100 * 10) / 10) * 3) / 3) * 100) / 10) * 30 * 10;
    }, [])
  );

  return (
    <div className="mt-3">
      <h5 className="mb-3">Use Memo</h5>
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
            value={name}
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
            value={job}
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
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
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

export default UseMemoPage;
