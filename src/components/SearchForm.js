import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

const SearchCard = styled.div`
  background-color: #E7DEB5;
  border: solid black 3px;
  text-align: center;
  width: 35%;
  margin: 25px 0px;
  padding 20px;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;


export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let search = "";

  //add input, onSubmit the input is set to state searchTerm

  //make axios call with parameter that includes searchTerm

  //display the names as a ul

  //need a submit handler

  const changeHandler = event => {
    setSearchTerm(event.target.value);
  }

  const submitHandler = event => {
    event.preventDefault();
    search += searchTerm;
    console.log("I searched", search);
    axios
    .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
    .then(res => {
      setSearchResults(res.data.results);
      console.log(res.data.results);
    })
    .catch(error => {
      console.log("Error:", error)
    })
  }

 
  

 
  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Search by Name:</label>
        <input 
          name="name"
          type="text"
          value={searchTerm}
          onChange={changeHandler}
        />
        <button type="submit">Search</button>
      </form>
      <SearchWrapper>
          {searchResults.map(person => (
            <SearchCard>
              <img src={person.image} alt={person.name} />
              <h3>{person.name}</h3>
            </SearchCard>

          ))}
      </SearchWrapper>
     
    </section>
  );
}
