import * as React from "react";
import { Outlet } from "react-router-dom";

import { useDisclosure } from "../../hooks";
import { Footer } from "../Footer";
import { Navbar, ProductSideBar, DropDown } from "../Navigation";

export const MainLayout = () => {
  const {
    close: closeSideBar,
    open: openSideBar,
    isOpen: sideBarIsOpen,
  } = useDisclosure();
  const {
    close: closeDropDown,
    open: openDropDown,
    isOpen: dropDownIsOpen,
  } = useDisclosure();

  return (
    <>
      <Navbar
        openSideBar={openSideBar}
        closeSideBar={closeSideBar}
        sideBarIsOpen={sideBarIsOpen}
        openDropDown={openDropDown}
        closeDropDown={closeDropDown}
        dropDownIsOpen={dropDownIsOpen}
      />
      <ProductSideBar
        openSideBar={openSideBar}
        closeSideBar={closeSideBar}
        sideBarIsOpen={sideBarIsOpen}
      />
      <DropDown
        openDropDown={openDropDown}
        closeDropDown={closeDropDown}
        dropDownIsOpen={dropDownIsOpen}
      />
      <main className="">
        <Outlet />
        <Footer />
      </main>
    </>
  );
};
