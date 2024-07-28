import React from "react";
import { useState, useEffect } from "react";

import "./UseEffectChallenge.css";

let UseEffectChallenge = () => {
  let [count, SetCount] = useState(0);
  let [Name, setName] = useState("");

  let updateCount = () => {
    SetCount(count + 1);
  };

  useEffect(() => {
    console.log(Name);
  }, [Name]);

  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  return (
    <>
      <h2>Use Effect Challenge By Thapa Technical</h2>
      <h2> Count : {count}</h2>
      <br />
      <button id="btn" onClick={() => updateCount()}>
        Increase Count
      </button>
      <div className="div">
        <h2>Name : {Name} </h2>

        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Write Something"
        />
      </div>
    </>
  );
};

export default UseEffectChallenge;
