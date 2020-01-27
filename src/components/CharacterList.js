import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const CharacterList = props => {
  
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`

    const getCharacters = () => {
      axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
    }

    getCharacters();

    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  console.log(characters);

  return (
    <section className="character-list">
      {characters.map(character => (
        <div>
          <Link to={`/characters/${character.id}`}>
          <CharacterDetails key={character.id} character={character} />
          </Link>
        </div>
      ))}
    </section>
  );
}

function CharacterDetails({ character }) {
  const { image, name, status, origin } = character;

  return (
    <div>
      <img src={image} />
      <h2>{name}</h2>
      <p>Status: {status} | From: {origin.name} </p>
    </div>
  )
};

export default CharacterList;