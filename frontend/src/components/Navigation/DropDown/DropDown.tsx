import * as React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";
import { Key } from "@mui/icons-material";

import { dropDownData } from "./dropDownData";

type SideBarProps = {
  openDropDown: () => void;
  closeDropDown: () => void;
  dropDownIsOpen: boolean;
};

export const DropDown = ({
  openDropDown,
  closeDropDown,
  dropDownIsOpen,
}: SideBarProps) => {
  return (
    <Drawer
      variant="temporary"
      sx={{ zIndex: 500, background: "#ffffff80" }}
      anchor="top"
      open={dropDownIsOpen}
      onClose={() => closeDropDown()}
    >
      <Toolbar
        disableGutters={true}
        sx={{
          width: 250,
        }}
      >
        <Box
          p={0}
          sx={{ marginTop: "64px" }}
          width="250px"
          textAlign="center"
          role="presentation"
        >
          {dropDownData.map((item) => {
            return (
              <div key={item.id}>
                <Button
                  sx={{
                    color: "#000",
                    width: "100%",
                    padding: `15px 0`,
                  }}
                >
                  {item.title}
                </Button>
                <Divider />
              </div>
            );
          })}
        </Box>
      </Toolbar>
    </Drawer>
  );
};
