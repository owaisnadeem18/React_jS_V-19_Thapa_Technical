import React from "react";
import "./Pokemon.css";

const PokemonCards = ({ PokemonData }) => {
  return (
    <>
      <div className="col-md-6 col-lg-4 mt-4">
        <div className="card">
          <img
            src={PokemonData.sprites.other.dream_world.front_default}
            className="card-img-top"
            alt={PokemonData.sprites.other.dream_world.front_default}
          />
          <div className="card-body">
            <h5 className="card-title PokemonName "> {PokemonData.name}</h5>
            <p className="Highlihted ">
              {" "}
              {PokemonData.types
                .map((currContent) => currContent.type.name)
                .join(", ")}
            </p>

            {/* Now , here we need to add the info about our pokemon */}

            <div className="grid-parent">
              <p className="pokemon-info">
                <span> Height: {PokemonData.height} </span>
              </p>
              <p className="pokemon-info">
                <span> Weight: {PokemonData.weight} </span>
              </p>
              <p className="pokemon-info">
                <span> speed: {PokemonData.stats[5].base_stat} </span>
              </p>
            </div>

            <div className="grid-parent">
              <div className="pokemon-info">
                <p>{PokemonData.base_experience}</p>
                <span> Experience</span>
              </div>
              <div className="pokemon-info">
                <p>{PokemonData.stats[1].base_stat}</p>
                <span>Attack</span>
              </div>
              <div className="pokemon-info">
                <p>
                  {PokemonData.abilities
                    .map((abilityInfo) => abilityInfo.ability.name)
                    .slice(0, 1)
                    .join(", ")}
                </p>
                <span> Abilities </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCards;
