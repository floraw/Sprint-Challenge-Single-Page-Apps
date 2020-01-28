import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CharListStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const CharCardStyle = styled.div`
  width: 35%;
  border: solid black 3px;
  padding: 25px;
  margin: 25px 0px;
`;

const CharCardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

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
    <CharListStyle>
      {characters.map(character => (
        <CharCardStyle>
          <CharCardLink to={`/characters/${character.id}`}>
          <CharacterDetails key={character.id} character={character} />
          </CharCardLink>
        </CharCardStyle>
      ))}
    </CharListStyle>
  );
}

function CharacterDetails({ character }) {
  const { image, name, status, origin } = character;

  return (
    <div>
      <img src={image} alt={name}/>
      <h2>{name}</h2>
      <p>Status: {status} | From: {origin.name} </p>
    </div>
  )
};

export default CharacterList;