import React from "react";
import { Route, Link } from "react-router-dom";

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header />
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/search">Search</Link>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route path="/characters/:id" component={CharacterCard} />
      <Route path="/search" component={SearchForm} />
    </main>
  );
}
