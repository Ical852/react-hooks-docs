import React from "react";

const Component1 = (props) => {
  const { label, state, setState, setChange } = props;
  return (
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">
        {label}
      </label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        value={state}
        onChange={(e) => setChange(setState, e.target.value)}
      />
    </div>
  );
};

export default Component1;
