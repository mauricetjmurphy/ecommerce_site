import * as React from "react";
import { Box, List, ListItem } from "@mui/material";

type ProductColorsProps = { colors: string[] };

const styles = {
  height: "15px",
  width: "15px",
  border: "1px solid gray",
  borderRadius: "7.5px",
  padding: "0px",
  marginRight: "4px",
};

export const ProductColors = (colors: ProductColorsProps) => {
  return (
    <Box
      sx={{
        "& .MuiList-root": {
          padding: "0px",
        },
      }}
    >
      <List
        sx={{
          display: "flex",
        }}
      >
        {colors.colors.map((item: string) => {
          switch (true) {
            case item === "blue":
              return <ListItem sx={{ background: item, ...styles }}></ListItem>;
            case item === "black":
              return <ListItem sx={{ background: item, ...styles }}></ListItem>;
            case item === "brown":
              return <ListItem sx={{ background: item, ...styles }}></ListItem>;
            case item === "yellow":
              return <ListItem sx={{ background: item, ...styles }}></ListItem>;
            case item === "white":
              return <ListItem sx={{ background: item, ...styles }}></ListItem>;
            case item === "gray":
              return <ListItem sx={{ background: item, ...styles }}></ListItem>;
            case item === "green":
              return <ListItem sx={{ background: item, ...styles }}></ListItem>;
            default:
              return null;
          }
        })}
      </List>
    </Box>
  );
};
