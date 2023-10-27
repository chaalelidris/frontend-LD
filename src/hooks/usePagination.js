import { useState, useEffect, useMemo } from 'react';

const usePagination = (data, initialRowsPerPage = 10) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(initialRowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  useEffect(() => {
    const newStartIndex = page * rowsPerPage;
    const newEndIndex = newStartIndex + rowsPerPage;

    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  }, [page, rowsPerPage]);

  const paginatedData = useMemo(() => { return (data.slice(startIndex, endIndex)) }, [data, endIndex, startIndex]);


  return {
    page,
    rowsPerPage,
    startIndex,
    endIndex,
    handleChangePage,
    handleChangeRowsPerPage,
    setPage,
    paginatedData,
  };
};

export default usePagination;
