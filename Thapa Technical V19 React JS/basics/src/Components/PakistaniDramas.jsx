import React from "react";

import image_01 from "../../public/Images/first_drama.jpg";
import image_02 from "../../public/Images/second_drama.jpg";
import image_03 from "../../public/Images/third_drama.jpg";
import image_04 from "../../public/Images/fourth_drama.jpg";
import image_05 from "../../public/Images/fifth_drama.jpg";

// use of dynamic values in jsx
let name_drama_01 = "Aisi Hay Tanhai";
let name_drama_02 = "May Gunehgar Nahi";
let name_drama_03 = "Ehd e Wafa";
let name_drama_04 = "Ye Dil Mera";
let name_drama_05 = "Yaqeen Ka Safar";

let rating_drama_01 = 4.84;
let rating_drama_02 = 4.74;
let rating_drama_03 = 4.94;
let rating_drama_04 = 4.88;
let rating_drama_05 = 4.9;

export const Pakistani_First_Drama = () => {
  return (
    <>
      <div className="first_drama">
        <img src={image_01} width="40%" height="30%" alt="" />
        <h2>Drama Name : {name_drama_01} </h2>
        <h2>Year: 2018</h2>
        <h2>
          Rating: {rating_drama_01}{" "}
          <span>{rating_drama_01 >= 4.9 ? "Most Loved" : ""}</span>{" "}
        </h2>
        <p>
          Summary : It was a great hit Pakistani Drama in which there was a
          great acting role performed by Pakistani star actors and actresses
        </p>
      </div>
    </>
  );
};
export const Pakistani_Second_Drama = () => {
  return (
    <>
      <div className="first_drama">
        <img src={image_02} width="40%" height="30%" alt="" />
        <h2>Drama Name : {name_drama_02} </h2>
        <h2>Year: 2018</h2>
        <h2>
          Rating: {rating_drama_02}{" "}
          <span>{rating_drama_02 >= 4.9 ? "Most Loved" : ""}</span>{" "}
        </h2>
        <p>
          Summary : It was a great hit Pakistani Drama in which there was a
          great acting role performed by Pakistani star actors and actresses
        </p>
      </div>
    </>
  );
};
export const Pakistani_Third_Drama = () => {
  return (
    <>
      <div className="first_drama">
        <img src={image_03} width="40%" height="30%" alt="" />
        <h2>Drama Name : {name_drama_03} </h2>
        <h2>Year: 2018</h2>
        <h2>
          Rating: {rating_drama_03}{" "}
          <span>{rating_drama_03 >= 4.9 ? "Most Loved" : ""}</span>{" "}
        </h2>
        <p>
          Summary : It was a great hit Pakistani Drama in which there was a
          great acting role performed by Pakistani star actors and actresses
        </p>
      </div>
    </>
  );
};
export const Pakistani_Fourth_Drama = () => {
  return (
    <>
      <div className="first_drama">
        <img src={image_04} width="40%" height="30%" alt="" />
        <h2>Drama Name : {name_drama_04} </h2>
        <h2>Year: 2018</h2>
        <h2>
          Rating: {rating_drama_04}{" "}
          <span>{rating_drama_04 >= 4.9 ? "Most Loved" : ""}</span>{" "}
        </h2>
        <p>
          Summary : It was a great hit Pakistani Drama in which there was a
          great acting role performed by Pakistani star actors and actresses
        </p>
      </div>
    </>
  );
};
export const Pakistani_Fifth_Drama = () => {
  return (
    <>
      <div className="first_drama">
        <img src={image_05} width="40%" height="30%" alt="" />
        <h2>Drama Name : {name_drama_05} </h2>
        <h2>Year: 2018</h2>
        <h2>
          Rating: {rating_drama_05}{" "}
          <span>{rating_drama_05 >= 4.9 ? "(Most Loved)" : ""}</span>{" "}
        </h2>
        <p>
          Summary : It was a great hit Pakistani Drama in which there was a
          great acting role performed by Pakistani star actors and actresses
        </p>
      </div>
    </>
  );
};
