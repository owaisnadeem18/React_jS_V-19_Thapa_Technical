import React from "react";
import "../Components/List.css";

const List = ({ items }) => {
  //   console.log(props);

  //   Destructuring of the props

  console.log(window.innerWidth);

  const {
    id,
    img_url,
    cast,
    name,
    rating,
    description,
    number_of_episodes,
    watch_url,
    genre,
  } = items;

  // Applying conditional styling in css:

  const rating_class = rating >= 4.9 ? "super_hit" : "avg";

  const rating_condition =
    rating >= 4.9 ? <span style={{ fontWeight: 700 }}>(Most Loved)</span> : "";

  // Applying Btn Styling of cards

  const btn_styles = {
    fontSize: "16px",
    padding: "13px",
    cursor: "pointer",
    backgroundColor: `${rating >= 4.9 ? "#90EE90" : "#87CEEB"}`,
    borderRadius: "1.4rem",
    border: "none",
    marginBottom: "14px",
    color: "#000000",
    fontWeight: 600,
  };

  const rating_class_styling = {
    padding: ".5rem 2rem",
    margin: "0 .5rem",
    borderRadius: "10px",
    fontWeight: 600,
    color: "#000000",
  };

  const margin_top_bottom = {
    margin: "2rem 0",
  };

  const line_height = {
    lineHeight: "3.1rem",
  };

  return (
    <>
      <li className="card" key={id}>
        <div className="card-img">
          <img src={img_url} alt="" />
        </div>
        <div className="card-content">
          <h1>{name}</h1>
          <h3>
            Rating{" "}
            <span style={rating_class_styling} className={rating_class}>
              {" "}
              {rating}
            </span>
            <span>{rating_condition}</span>
          </h3>
          <h3>
            Cast :
            <li style={margin_top_bottom}>
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
          </h3>
          <h3>Total Episodes : {number_of_episodes}</h3>
          <h3 style={{ margin: "1.3rem 0" }}>
            <span style={{ fontWeight: "600" }}> Genre : </span>
            <li style={margin_top_bottom}>
              {genre.map((genre_item) => {
                return (
                  <ul key={genre_item}>
                    <li style={margin_top_bottom}>{genre_item}</li>
                  </ul>
                );
              })}
            </li>
          </h3>

          <p style={line_height}>
            <span>Story:</span> {description}{" "}
          </p>
          <a href={watch_url} target="_blank">
            {" "}
            <button style={btn_styles}> Watch Drama </button>{" "}
          </a>
        </div>
      </li>
    </>
  );
};

export default List;
