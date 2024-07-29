import React from "react";

let BadPractice = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.error(err);
    });

  return (
    <>
      <h1> Topic : Bad Practices of Fetching API Data</h1>
    </>
  );
};

export default BadPractice;
