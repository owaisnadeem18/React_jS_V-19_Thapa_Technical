import React, { useState } from "react";

function ControlledForms() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value:", inputValue);
  };

  return (
    <>
      <h2>Controlled Forms</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ControlledForms;

// Definition of controlled forms:
// Controlled Forms: The form's input is bound to state, and every input change is handled by React. This allows fine-grained control, validation, and manipulation of form data.
