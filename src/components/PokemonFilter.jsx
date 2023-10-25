/* eslint-disable react/prop-types */
import { TablePagination, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import usePagination from "../hooks/usePagination";
import { calculatePower } from "../utils/pokemonUtils";

const PokemonFilter = ({ data, setPage }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [threshold, setThreshold] = useState("");
  const [minPower, setMinPower] = useState(0);
  const [maxPower, setMaxPower] = useState(0);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  const handleThresholdChange = (event) => {
    setThreshold(event.target.value);
    setPage(0);
  };

  const filteredData = data.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (threshold === "" || calculatePower(pokemon) >= parseInt(threshold, 10))
  );

  const {
    page,
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
    <div>
      <TextField
        label="Search by Name"
        value={searchQuery}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Search by Threshold"
        type="number"
        value={threshold}
        onChange={handleThresholdChange}
        fullWidth
        margin="normal"
      />

      <Typography variant="subtitle1">
        Min Power: {minPower}, Max Power: {maxPower}
      </Typography>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]} // rows per page
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default PokemonFilter;
