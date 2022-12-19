import { Theme } from "@mui/material/styles";

export const navbarStyles = {
  appBar: {
    color: "#fff",
    maxWidth: "100vw",
    borderBottom: "1px solid #c2bdb6",
    boxShadow: "none",
    transition: (theme: Theme) =>
      theme.transitions.create(["background", "top"], {
        easing: theme.transitions.easing.sharp,
        duration: 500,
      }),
    background: "transparent",
    top: "0",

    "&& .MuiButtonBase-root": {
      "&:hover": {
        background: "transparent",
        opacity: ".7",
      },
    },
    "&& .MuiSvgIcon-root": {
      "&:hover": {
        background: "transparent",
        opacity: ".7",
      },
    },
    "&& .MuiBadge-badge": {
      "&:hover": {
        background: "transparent",
        opacity: ".7",
      },
    },

    "&:hover": {
      color: "#000",
      background: "#fff",
      "& .MuiButtonBase-root": { color: "#000" },
      "&& .MuiBadge-badge": {
        color: "#fff",
        border: "none",
        background: "#000",
      },
    },
  },
  scrolledAppBar10: {
    background: "#fff",
    color: "#000",
    "&& .MuiButtonBase-root": {
      color: "#000",
    },
    "&& .MuiSvgIcon-root": {
      color: "#000",
    },
    "&& .MuiBadge-badge": {
      color: "#fff",
      border: "none",
      background: "#000",
    },
  },
  scrolledAppBar40: {
    top: "-64px",
  },
  appBarToolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  brandLogo: {
    textAlign: "left",
  },
  navbarBtn: {
    fontSize: "12px",
    "& .MuiButton-endIcon": {
      margin: "0",
    },
  },
  navbarIconBtn: {
    fontSize: "14px",
    color: "#fff",
  },
};
