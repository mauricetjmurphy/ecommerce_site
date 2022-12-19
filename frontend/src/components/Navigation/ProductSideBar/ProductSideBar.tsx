import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Drawer, List, ListItem } from "@mui/material";

import { productSideBarData } from "./productSideBarData";
import { productDrawerStyles } from "./productSideBar.styles";

type ProductSideBarProps = {
  openSideBar: () => void;
  closeSideBar: () => void;
  sideBarIsOpen: boolean;
};

export const ProductSideBar = ({
  openSideBar,
  closeSideBar,
  sideBarIsOpen,
}: ProductSideBarProps) => {
  const navigate = useNavigate();
  return (
    <Drawer
      variant="temporary"
      sx={productDrawerStyles.paper}
      anchor="left"
      open={sideBarIsOpen}
      onClose={() => closeSideBar()}
    >
      <List sx={productDrawerStyles.listItem}>
        {productSideBarData.map((item) => {
          return (
            <ListItem sx={productDrawerStyles.button} key={item.id}>
              <Button
                onClick={() => {
                  navigate(`${item.path}`, {
                    state: { category: item.category },
                  });
                  closeSideBar();
                }}
              >
                {item.title}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
