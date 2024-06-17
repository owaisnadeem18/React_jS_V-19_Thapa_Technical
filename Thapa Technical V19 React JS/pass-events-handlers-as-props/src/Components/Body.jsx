import React from "react";

export default function Body() {
  const handleClick = () => {
    alert("I have been clicked !!! ");
  };

  const MouseHover = () => {
    alert("Thanks for hovering me");
  };

  return (
    <>
      <h1>Pass Event Handlers as Props ...</h1>
      <Child onBtnClick={handleClick} onMouseHover={MouseHover} />
    </>
  );
}

function Child(props) {
  const DoubleClickHua = () => {
    alert("Mjhy double click kiya gya hay !!! ");
  };

  return (
    <>
      <button onClick={props.onBtnClick}>I am a child component</button>
      <button onMouseEnter={props.onMouseHover}>Hover me Please </button>
      <button onDoubleClick={DoubleClickHua}>
        I am the local child component's button
      </button>
      <button
        onDoubleClick={() =>
          alert("Mjhy dubara double click kiya hay fat arrow function say !!! ")
        }
      >
        I am the local child component's button
      </button>
    </>
  );
}
