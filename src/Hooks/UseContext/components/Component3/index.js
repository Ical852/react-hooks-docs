import React, { useContext } from "react";
import { PageContext } from "../../context";

const Component3 = () => {
  const context = useContext(PageContext);
  const { data, setData } = context;
  const { salary } = data;
  const setSalary = (value) => {
    setData({
      ...data,
      salary: value,
    });
  };

  return (
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
  );
};

export default Component3;
