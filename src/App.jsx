// src/App.js
import { useEffect, useState } from "react";
import PokemonFilter from "./components/PokemonFilter";
import { Box } from "@mui/material";

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/pokemon.json");
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ mt: "60px" }} component="main">
      <PokemonFilter data={pokemonData} />
    </Box>
  );
};

export default App;
