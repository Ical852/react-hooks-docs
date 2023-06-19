import React, { useContext } from "react";
import { PageContext } from "../../context";

const Component1 = () => {
  const context = useContext(PageContext);
  const { data, setData } = context;
  const { name } = data;
  const setName = (value) => {
    setData({
      ...data,
      name: value,
    });
  };

  return (
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
  );
};

export default Component1;
