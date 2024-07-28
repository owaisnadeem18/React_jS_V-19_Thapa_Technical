import React from "react";
import { useState, useEffect } from "react";

export const CleanUpFunc = () => {
  let [data, setData] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setData((prevData) => prevData + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Data</h1>
      <h2>{data}</h2>
    </div>
  );
};
