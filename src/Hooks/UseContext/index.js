import React, { createContext, useState } from "react";
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
      <div className="m-5">
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
