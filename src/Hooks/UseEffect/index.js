import React, { useEffect, useState } from "react";

const UseEffectPage = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setData("Eng ing eng");
    }, 2000);
  }, []);

  return <div className="w-100 text-center my-5">{data || "Loading..."}</div>;
};

export default UseEffectPage;
