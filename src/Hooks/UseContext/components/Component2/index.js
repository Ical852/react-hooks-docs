import React, { useContext } from "react";
import { PageContext } from "../../context";

const Component2 = () => {
  const context = useContext(PageContext);
  const { data, setData } = context;
  const { job } = data;
  const setJob = (value) => {
    setData({
      ...data,
      job: value,
    });
  };

  return (
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
  );
};

export default Component2;
