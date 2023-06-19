import React, { useState } from "react";
import {
  ButtonSubmit,
  Component1,
  Component2,
  Component3,
  SubmitComponent,
} from "./components";
import { PageContext } from "./context";

const UseContextPage = () => {
  const [data, setData] = useState({
    name: "",
    job: "",
    salary: 0,
  });
  const contextData = { data, setData };

  return (
    <PageContext.Provider value={contextData}>
      <div className="mt-3">
        <h5 className="mb-3">Use Context</h5>
        <form>
          <Component1 />
          <Component2 />
          <Component3 />
          <ButtonSubmit />
        </form>
        <SubmitComponent />
      </div>
    </PageContext.Provider>
  );
};

export default UseContextPage;
