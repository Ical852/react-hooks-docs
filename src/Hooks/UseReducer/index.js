import React, { useReducer } from "react";

import { reducer } from "./reducer";
import { initialState } from "./state";
import { setJob, setName, setSalary } from "./actions";

const UseReducerPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="mt-3">
      <h5 className="mb-3">Use Reducer</h5>
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
            value={state.name}
            onChange={(e) => dispatch(setName(e.target.value))}
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
            value={state.job}
            onChange={(e) => dispatch(setJob(e.target.value))}
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
            value={state.salary}
            onChange={(e) => dispatch(setSalary(e.target.value))}
          />
        </div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            console.log(
              `name : ${state.name}, job: ${state.job}, salary: $${state.salary}`
            );
          }}
        >
          Submit
        </button>
      </form>

      <div className="mt-5">
        <div>Full Name : {state.name}</div>
        <div>Job : {state.job}</div>
        <div>Salary : ${state.salary}</div>
      </div>
    </div>
  );
};

export default UseReducerPage;
