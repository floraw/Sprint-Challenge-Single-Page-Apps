import React, { useState, useEffect } from "react";
import axios from 'axios';

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
      <div className="search-results">
        <ul>
          {searchResults.map(person => (
            <li>{person.name}</li>
          ))}
        </ul>
      </div>
     
    </section>
  );
}
