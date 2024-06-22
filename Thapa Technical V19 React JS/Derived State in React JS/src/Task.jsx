import { useState } from "react";
import React from "react";

const Task = () => {
  const [Obj, setObj] = useState([
    {
      name: "Owais Nadeem",
      age: 22,
    },
    { name: "Hamza Arshad", age: 23 },
    { name: "Hammad Arshad", age: 21 },
    { name: "Saad Rabab", age: 31 },
  ]);

  // Derived State
  let derived_state = Obj.length;

  let avg_Age = Obj.reduce((accum, currElem) => accum + currElem.age, 0);

  return (
    <div>
      <h2>Interview Question: What Actually is 'Derived State' In React JS</h2>
      <h2>Dynamic Data of Array of Objects</h2>
      <h3>
        Any variable which is storing some calculated data of our state hook of
        react js is called as 'Derived State'
      </h3>
      <ul>
        {Obj.map((e) => {
          return (
            <li key={e.name}>
              {" "}
              Name: {e.name} & Age: {e.age}
            </li>
          );
        })}
      </ul>

      <h2>
        The total number of people in the array of object are: {derived_state}
      </h2>
      <p>
        <b>'{derived_state}'</b> Ye jo 04 hay , ye state variable k result key
        calculation hay , or isi variable ko bolain gay 'Derived State '
      </p>
      <h3>The average of their ages are : {avg_Age / derived_state} </h3>
    </div>
  );
};

export default Task;
