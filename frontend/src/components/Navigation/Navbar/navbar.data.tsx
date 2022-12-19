import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const navbarData = {
  navbarTabs: [
    {
      id: 1,
      title: "Store",
      path: "",
      icon: <ExpandMoreIcon />,
      link: false,
    },
    {
      id: 2,
      title: "Collections",
      path: "",
      icon: <ExpandMoreIcon />,
      link: false,
    },
    {
      id: 3,
      title: "Journal",
      path: "/products",
      icon: "",
      link: true,
    },
  ],
  navbarIcon: [
    {
      id: 1,
      title: "Account",
      path: "/login",
      icon: <PersonOutlineIcon />,
      link: true,
    },
    {
      id: 2,
      title: "Cart",
      path: "",
      icon: <ShoppingBagIcon />,
      link: false,
      badge: true,
    },
    {
      id: 3,
      title: "Search",
      path: "",
      icon: <SearchIcon />,
      link: false,
    },
  ],
};
