import React, { useRef } from "react";

function UncontrolledForms() {
  // Ref ko use kar ke DOM element ko directly access karte hain
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Form ko reload hone se rokna
    console.log("Submitted value:", inputRef.current.value); // Ref se value lete hain
  };

  return (
    <>
      <h2>Un Controlled Forms</h2>

      <form onSubmit={handleSubmit}>
        {/* Input ka value React ke state ke zariye manage nahi hota */}
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UncontrolledForms;
