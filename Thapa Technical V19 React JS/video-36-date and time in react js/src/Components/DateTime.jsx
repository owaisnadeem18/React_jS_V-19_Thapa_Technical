import React, { useState } from "react";

export default function DateTime() {
  const [Datetime, setDateTime] = useState("");

  // Agar kabhi bhi UI k andar koi bhi component change ho rha hota hay , then we are liable to must use states in react js.

  let now = new Date().toLocaleDateString();

  console.log(now);

  setInterval(() => {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    setDateTime(`Current Date is ${date} & the time is ${time}`);
  }, 1000);

  return (
    <div>
      <h1>{Datetime}</h1>
    </div>
  );
}
