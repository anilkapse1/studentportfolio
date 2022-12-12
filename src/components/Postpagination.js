import React, { useContext, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PageIndex } from "../Context";


const Postpagination = ({ postsPerPage, totalPost, paginate }) => {
  const { page, setPage } = useContext(PageIndex);

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumber.push(i);
  }

  const handleChange = (event, value) => {
    console.log("onchange page number", value);
    setPage(value);
  };

  return (
    <Stack spacing={12}>
      <Pagination
        count={pageNumber.length}
        variant="outlined"
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default Postpagination;
