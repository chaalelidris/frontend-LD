/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import { calculatePower } from "../../utils/pokemonUtils";

/* Table columns */
const tableColumns = [
  { id: "ID" },
  { id: "Name" },
  { id: "Type" },
  { id: "Health" },
  { id: "Attack" },
  { id: "Defense" },
  { id: "Special Attack" },
  { id: "Special Defense" },
  { id: "Speed" },
  { id: "Power" },
];

const PokemonTable = ({
  page,
  rowsPerPage,
  filteredData,
  paginatedData,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <Box component="div">
      <TableContainer
        component={Paper}
        sx={{ borderRadius: "10px", marginTop: "30px" }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: "#f4f6f8" }}>
            <TableRow>
              {tableColumns.map((column) => (
                <TableCell
                  align="center"
                  sx={{ color: "#687684" }}
                  key={column.id}
                >
                  {column.id}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((pokemon) => (
              <TableRow key={pokemon.id}>
                <TableCell align="center">{pokemon.id}</TableCell>
                <TableCell align="center">{pokemon.name}</TableCell>
                <TableCell align="center">{pokemon.type}</TableCell>
                <TableCell align="center">{pokemon.hp}</TableCell>
                <TableCell align="center">{pokemon.attack}</TableCell>
                <TableCell align="center">{pokemon.defense}</TableCell>
                <TableCell align="center">{pokemon.special_attack}</TableCell>
                <TableCell align="center">{pokemon.special_defense}</TableCell>
                <TableCell align="center">{pokemon.speed}</TableCell>
                <TableCell align="center">{calculatePower(pokemon)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]} // rows per page
        component="div"
        count={filteredData.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default PokemonTable;
