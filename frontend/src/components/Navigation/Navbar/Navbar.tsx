import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useScrollPosition, useWindowSize } from "../../../hooks";

import { MenuIconLinkButton } from "./MenuIconLinkButton";
import { MenuIconWithBadge } from "./MenuIconWithBadge";
import { navbarStyles } from "./navbar.styles";
import { navbarData } from "./navbar.data";

type NavbarProps = {
  openSideBar: () => void;
  closeSideBar: () => void;
  sideBarIsOpen: boolean;
  openDropDown: () => void;
  closeDropDown: () => void;
  dropDownIsOpen: boolean;
};

export const Navbar = ({
  openSideBar,
  closeSideBar,
  sideBarIsOpen,
  openDropDown,
  closeDropDown,
  dropDownIsOpen,
}: NavbarProps) => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const scrollPosition = useScrollPosition();

  return (
    <AppBar
      sx={[
        navbarStyles.appBar,
        scrollPosition > 10 && navbarStyles.scrolledAppBar10,
        scrollPosition > 100 && navbarStyles.scrolledAppBar40,
      ]}
    >
      <Toolbar sx={navbarStyles.appBarToolbar}>
        {width < 720 && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => {
              dropDownIsOpen ? closeDropDown() : openDropDown();
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Stack
          direction="row"
          spacing={2}
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <Button
            sx={navbarStyles.navbarBtn}
            color="inherit"
            onClick={() => navigate("/")}
            disableRipple
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={navbarStyles.brandLogo}
            >
              Fabrique
            </Typography>
          </Button>
          {navbarData.navbarTabs.map((item) => {
            if (item.link) {
              return (
                <Button
                  sx={navbarStyles.navbarBtn}
                  key={item.id}
                  endIcon={item.icon}
                  color="inherit"
                  onClick={() => {
                    navigate(`${item.path}`);
                  }}
                  disableRipple
                >
                  {item.title}
                </Button>
              );
            }

            if (!item.link) {
              return (
                <Button
                  sx={navbarStyles.navbarBtn}
                  key={item.id}
                  endIcon={item.icon}
                  color="inherit"
                  onClick={() => {
                    console.log("clicked");
                  }}
                  disableRipple
                >
                  {item.title}
                </Button>
              );
            }
          })}
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {navbarData.navbarIcon.map((item) => {
            if (item.link) {
              return (
                <MenuIconLinkButton
                  key={item.id}
                  data={item}
                  sx={navbarStyles.navbarIconBtn}
                />
              );
            }

            if (item.badge) {
              return (
                <MenuIconWithBadge
                  key={item.id}
                  data={item}
                  sx={navbarStyles.navbarIconBtn}
                />
              );
            }

            if (!item.link) {
              return (
                <IconButton
                  sx={navbarStyles.navbarIconBtn}
                  key={item.id}
                  disableRipple
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  {item.icon}
                </IconButton>
              );
            }
          })}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
