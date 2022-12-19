const border = "1px solid #ebebeb";

export const productDrawerStyles = {
  paper: {
    "& .MuiDrawer-paper": {
      width: 350,
      backgroundColor: "#ffffff",
      marginTop: "64px",
      maxHeight: "calc(100vh - 104px)",
      borderTopRightRadius: "12px",
      borderBottomRightRadius: "12px",
      padding: "20px",
    },
  },
  listItem: {
    padding: "0",

    "& .MuiListItem-root": {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      borderTop: border,
      borderLeft: border,
      borderRight: border,
      height: "calc((100vh - 104px)/11)",
      padding: "0",

      "&:nth-of-type(1)": {
        borderBottom: "none",
        borderTopRightRadius: "12px",
        borderTopLeftRadius: "12px",
      },

      "&:nth-of-type(11)": {
        borderBottom: border,
        borderBottomRightRadius: "12px",
        borderBottomLeftRadius: "12px",
      },
    },
  },
  button: {
    "& .MuiButtonBase-root": {
      color: "#000",
      width: "100%",
      height: "100%",
      borderRadius: "0",
    },
  },
};
