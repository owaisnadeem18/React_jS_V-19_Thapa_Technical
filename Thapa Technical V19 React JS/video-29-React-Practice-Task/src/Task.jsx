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
    { name: "Rubab Siddique", age: 31 },
  ]);

  return (
    <div>
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
    </div>
  );
};

export default Task;
