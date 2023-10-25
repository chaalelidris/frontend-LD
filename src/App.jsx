// src/App.js
import { useEffect, useState } from "react";
import PokemonFilter from "./components/PokemonFilter";

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
    <div style={{ marginTop: "60px" }}>
      <PokemonFilter data={pokemonData} />
    </div>
  );
};

export default App;
