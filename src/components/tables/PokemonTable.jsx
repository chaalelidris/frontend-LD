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
    <div>
      <TableContainer
        component={Paper}
        style={{ borderRadius: "10px", marginTop: "30px" }}
      >
        <Table>
          <TableHead style={{ backgroundColor: "#f4f6f8" }}>
            <TableRow>
              {tableColumns.map((column) => (
                <TableCell style={{ color: "#687684" }} key={column.id}>
                  {column.id}
                </TableCell>
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
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default PokemonTable;
