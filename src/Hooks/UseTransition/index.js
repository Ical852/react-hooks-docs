import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const UseTransitionPage = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState(0);

  const items = [
    {
      id: 1,
      title: "Name",
      state: name,
      setState: setName,
    },
    {
      id: 2,
      title: "Job",
      state: job,
      setState: setJob,
    },
    {
      id: 3,
      title: "Salary",
      state: salary,
      setState: setSalary,
    },
  ];
  const transitions = useTransition(items, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(100%)" },
  });

  return (
    <div className="mt-3">
      <h5 className="mb-3">Use State</h5>
      <form>
        {transitions((styles, item) => (
          <animated.div class="mb-3" style={styles}>
            {console.log(styles, item)}
            <label for="exampleInputEmail1" class="form-label">
              {item.title}
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={item.state}
              onChange={(e) => item.setState(e.target.value)}
            />
          </animated.div>
        ))}
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

export default UseTransitionPage;
