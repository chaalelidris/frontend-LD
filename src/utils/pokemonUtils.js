// pokemonUtils.js

// Utility function to calculate power
export function calculatePower(pokemon) {
    return (
      pokemon.hp +
      pokemon.attack +
      pokemon.defense +
      pokemon.special_attack +
      pokemon.special_defense +
      pokemon.speed
    );
  }
  