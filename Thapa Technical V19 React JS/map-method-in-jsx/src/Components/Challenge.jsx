// Here , we have to pass JSX data as our props

import React from "react";

const Challenge = () => {
  return (
    <>
      <h1>Profile Card Challenge</h1>
      <ChallengeComponent
        name="Alice"
        age={30}
        greeting={
          <div>
            <strong>Hy Alice ! Have a nice day </strong>
          </div>
        }
      >
        <p>Hobbies : Coding and reading </p>
        <button>contact</button>
      </ChallengeComponent>

      <h1>Profile Card Challenge</h1>
      <ChallengeComponent
        name="Bob"
        age={24}
        greeting={
          <div>
            <strong>Hy Bob ! Have a nice day </strong>
          </div>
        }
      >
        <p>Hobbies : Watching Tech Exhibitions and Writing Coding books </p>
        <button>contact</button>
      </ChallengeComponent>
    </>
  );
};

export default Challenge;

function ChallengeComponent(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <h2>{props.greeting}</h2>
      <div>{props.children}</div>
    </>
  );
}
