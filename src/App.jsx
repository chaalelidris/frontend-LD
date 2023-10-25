// src/App.js
import { useEffect, useState } from "react";
import PokemonTable from "./components/PokemonTable";

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    // Fetch data from pokemon.json and update state
    const fetchData = async () => {
      try {
        const response = await fetch("/pokemon.json"); // Adjust the path accordingly
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokemon Table</h1>
      <PokemonTable data={pokemonData} />
    </div>
  );
};

export default App;
