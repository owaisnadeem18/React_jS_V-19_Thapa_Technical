import React from "react";

const SpreadOperator = () => {
  /* Here we have to discuss few of the most important use cases of our spread operator (three dots ...) in react js */

  /* Use Case # 1  */

  /* Copying Array is the most important and the first use case of this spread operator */

  let arr = [42, 89, 2, 4];
  arr[4] = 53;
  console.log(`I am the copied array ${[...arr]}`);
  console.log(`I am the original array ${arr}`);

  /* Use Case # 2  */

  // Concatenating two different arrays

  let arr_1 = [45, 92, 1];
  let arr_2 = [205, 922, 13];

  let concat_arrays = [...arr_1, ...arr_2];
  console.log(concat_arrays);

  /* Use Case # 3  */
  // Adding Elements to an Array

  let array = [45, 90, 23, 12, 89, 12];

  console.log([...arr, "Owais Nadeem", "You can make changes in array too ! "]);

  /* Use Case # 4  */
  // Spreading Object properties (We can also spread our objects and can do the same functionality of our objects on it )

  // Here is a quick task in which we have to increment the age of person by 1

  let obj = {
    myName: "Owais Nadeem",
    age: 22,
  };

  let copied_obj = { ...obj, age: obj.age + 1 };

  console.log(`The copied object is = ${Object.values(copied_obj)}`);

  console.log(`The original object is = ${Object.values(obj)} `);

  return (
    <div>
      <h1>Using Spread Operator --- {JSON.stringify(copied_obj)} </h1>
      <br />
      <hr />
      <br />

      <h1>
        Without Using Spread Operator --- The original Array is ={" "}
        {JSON.stringify(obj)}{" "}
      </h1>
    </div>
  );
};

export default SpreadOperator;
