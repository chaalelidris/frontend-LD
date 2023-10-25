/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

/* Custom Hooks */
import usePagination from "../hooks/usePagination";

/* Utils */
import { calculatePower } from "../utils/pokemonUtils";

/* Table columns */
const tableColumns = [
  { id: "ID" },
  { id: "Name" },
  { id: "Type" },
  { id: "HP" },
  { id: "Attack" },
  { id: "Defense" },
  { id: "Special Attack" },
  { id: "Special Defense" },
  { id: "Speed" },
  { id: "Power" },
];

const PokemonTable = ({ data }) => {
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
    setPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination(filteredData); // Pagination Hook

  useEffect(() => {
    // Calculate min and max powers when data changes
    const powers = paginatedData.map(calculatePower);
    setMinPower(Math.min(...powers));
    setMaxPower(Math.max(...powers));
  }, [paginatedData]); // Min & Max Power Calculation Per Page

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

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {tableColumns.map((column) => (
                <TableCell key={column.id}>{column.id}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((pokemon) => (
              <TableRow key={pokemon.id}>
                <TableCell>{pokemon.id}</TableCell>
                <TableCell>{pokemon.name}</TableCell>
                <TableCell>{pokemon.type}</TableCell>
                <TableCell>{pokemon.hp}</TableCell>
                <TableCell>{pokemon.attack}</TableCell>
                <TableCell>{pokemon.defense}</TableCell>
                <TableCell>{pokemon.special_attack}</TableCell>
                <TableCell>{pokemon.special_defense}</TableCell>
                <TableCell>{pokemon.speed}</TableCell>
                <TableCell>{calculatePower(pokemon)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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

export default PokemonTable;
