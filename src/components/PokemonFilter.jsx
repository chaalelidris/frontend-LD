/* eslint-disable react/prop-types */
import { Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";

/* Hooks */
import usePagination from "../hooks/usePagination";

/* Util */
import { calculatePower } from "../utils/pokemonUtils";

/* Component */
import PokemonTable from "./tables/PokemonTable";
import Input from "./inputs/Input";

const PokemonFilter = ({ data }) => {
  const [nameSearch, setNameSearch] = useState("");
  const [threshold, setThreshold] = useState("");
  const [minPower, setMinPower] = useState(0);
  const [maxPower, setMaxPower] = useState(0);

  const handleSearchChange = (event) => {
    setNameSearch(event.target.value);
    setPage(0);
  };

  const handleThresholdChange = (event) => {
    setThreshold(event.target.value);
    setPage(0);
  };

  const filteredData = data.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(nameSearch.toLowerCase()) &&
      (threshold === "" || calculatePower(pokemon) >= parseInt(threshold, 10))
  );

  const {
    page,
    setPage,
    rowsPerPage,
    paginatedData,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination(filteredData);

  useEffect(() => {
    // Calculate min and max powers when data changes
    const powers = paginatedData.map(calculatePower);
    setMinPower(Math.min(...powers));
    setMaxPower(Math.max(...powers));
  }, [paginatedData]);

  return (
    <Container>
      <div
        style={{
          grid: "initial",
          padding: "12px",
          boxShadow: "0 10px 8px rgb(0 0 0 / 0.04)",
          borderRadius: "10px",
          border: "1px solid #f5f6f7",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          <Input
            value={nameSearch}
            onChange={handleSearchChange}
            icon="search"
            placeholder="Search..."
          />
          <Input
            value={threshold}
            onChange={handleThresholdChange}
            type="number"
            icon="favorite"
            placeholder="Power threshold"
          />
        </div>
        <Typography variant="body1">Min Power: {minPower}</Typography>
        <Typography variant="body1">Max Power: {maxPower}</Typography>
      </div>

      <PokemonTable
        page={page}
        paginatedData={paginatedData}
        filteredData={filteredData}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPage={rowsPerPage}
      />
    </Container>
  );
};

export default PokemonFilter;
