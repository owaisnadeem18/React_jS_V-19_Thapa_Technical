import React from "react";
import { useEffect, useState } from "react";
import "./FetchData.css";

let FetchData = () => {
  let [apiData, setApiData] = useState(null);

  let [Loading, setLoading] = useState(true);

  let api = "https://pokeapi.co/api/v2/pokemon/pikachu/";

  let FetchPokemon = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error : ", err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    FetchPokemon();
  }, []);

  if (Loading) {
    return (
      <>
        <h1>Loading ... </h1>
      </>
    );
  }

  return (
    <>
      <h2>Fetched API Data: </h2>
      <div className="card">
        <h1> {apiData.name}</h1>
        <img src={apiData.sprites.other.dream_world.front_default} alt="" />
      </div>
    </>
  );
};

export default FetchData;
