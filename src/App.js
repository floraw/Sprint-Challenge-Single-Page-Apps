import React from "react";
import { Route, Link } from "react-router-dom";
import styled from 'styled-components';

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import SearchForm from "./components/SearchForm";

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-evenly;
  padding: 30px;
  margin: 30px auto;
  background-color: #E7DEB5;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 950;
`;


export default function App() {
  return (
    <main>
      <Header />
      <NavStyle>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/characters">Characters</StyledLink>
        <StyledLink to="/search">Search</StyledLink>
      </NavStyle>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route path="/characters/:id" component={CharacterCard} />
      <Route path="/search" component={SearchForm} />
    </main>
  );
}
