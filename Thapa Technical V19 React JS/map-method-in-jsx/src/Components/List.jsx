import React from "react";

const List = ({ items }) => {
  //   console.log(props);

  //   Destructuring of the props

  const {
    id,
    img_url,
    cast,
    name,
    rating,
    description,
    number_of_episodes,
    watch_url,
  } = items;

  return (
    <>
      <li style={{ listStyle: "none", marginBottom: "70px" }} key={id}>
        <h1>Name : {name}</h1>
        <img src={img_url} width={"30%"} alt="" />
        <h2>
          Rating {rating} <span>{rating > 4.9 ? "(Most Loved)" : ""}</span>{" "}
        </h2>
        <h2>
          Cast :
          <li
            style={{
              listStyle: "none",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            {cast.map((mini_item) => {
              return (
                <ul key={mini_item} style={{ listStyle: "none" }}>
                  <li style={{ marginBottom: "16px" }} key={mini_item}>
                    {mini_item}
                  </li>
                </ul>
              );
            })}
          </li>
        </h2>
        <h2>Total Episodes {number_of_episodes}</h2>
        <p style={{ fontSize: "18px" }}>Story: {description} </p>
        <a href={watch_url} target="_blank">
          {" "}
          <button
            style={{ fontSize: "16px", padding: "13px", cursor: "pointer" }}
          >
            Watch Drama{" "}
          </button>{" "}
        </a>
      </li>
    </>
  );
};

export default List;
