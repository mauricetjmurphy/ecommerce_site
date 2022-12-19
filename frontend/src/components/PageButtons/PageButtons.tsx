import * as React from "react";
import { Box, Button, Stack } from "@mui/material";

type PageButtonsProps = {
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
};

export const PageButtons = ({
  pageNumber,
  setPageNumber,
}: PageButtonsProps) => {
  return (
    <Box>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        direction={"row"}
        my={2}
      >
        <Button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber === 1}
          variant={"outlined"}
        >
          Prev Page
        </Button>
        <Button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber === 8}
          variant={"outlined"}
        >
          Next Page
        </Button>
      </Stack>
    </Box>
  );
};
