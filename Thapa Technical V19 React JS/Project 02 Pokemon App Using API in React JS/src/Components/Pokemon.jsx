import React, { useEffect, useState } from "react";
import "./Pokemon.css";
import PokemonCards from "./PokemonCards";
import "../App.css";

let Pokemon = () => {
  let [Data, SetData] = useState([]);
  let [Loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let [search, SetSearch] = useState("");

  let api = "https://pokeapi.co/api/v2/pokemon?limit=100";

  const FetchData = async () => {
    try {
      api = await fetch(api);
      let data = await api.json();
      console.log(data);

      const detailedData = data.results.map(async (content) => {
        let res = await fetch(content.url);
        let jsonData = await res.json();
        // console.log(jsonData);
        return jsonData;
      });

      let allPromises = await Promise.all(detailedData);

      console.log(allPromises);

      SetData(allPromises);

      setLoading(false);
    } catch (err) {
      console.error("Error is : ", err);
      setLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  // building the functionality of search

  const searchData = Data.filter((currPok) =>
    currPok.name.toLowerCase().includes(search.toLowerCase())
  );

  if (Loading) {
    return (
      <div className="parent-loader loading">
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading">
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container first ">
        <h2>Search Pokémon</h2>
        <input
          className="key-input"
          type="text"
          placeholder="Search Pokemon"
          value={search}
          onChange={(e) => SetSearch(e.target.value)}
        />
      </div>

      <div className="container second mt-3 ">
        <div className="row">
          {searchData.map((currData) => (
            <PokemonCards key={currData.name} PokemonData={currData} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pokemon;
