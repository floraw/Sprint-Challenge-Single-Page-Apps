import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

const CardStyle = styled.div`
  border: solid black 3px;
  padding: 30px;
  margin: 20px;
  background-color: #E7DEB5;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;


const CharacterCard = (props) => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    const id = props.match.params.id;

    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
      setCharacter(response.data);
    })
    .catch(error => {
      console.log("Error:", error);
    });

  },[props.match.params.id])

  if(!character) {
    return <div>Loading character...</div>
  }

  console.log(character);

  const { name, status, species, image, episode, origin } = character;
  return (
    <CardStyle>
      <div className="image-wrapper">
        <img src={image} alt={name} />
      </div>
      <div className="character-details">
        <h2>{name}</h2>
        <h4>Starring in {episode.length} episodes!</h4>
        <p>A {species} from planet {origin.name}, currently {status}</p>
      </div>
    </CardStyle>
  )
}

export default CharacterCard;