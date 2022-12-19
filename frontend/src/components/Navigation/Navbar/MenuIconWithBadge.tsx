import { Badge, IconButton } from "@mui/material";
import React from "react";

type MenuIconWithBadgeProps = {
  sx: React.CSSProperties;
  data: {
    id: number;
    title: string;
    path: string;
    icon: React.ReactNode;
    link: Boolean;
    badge?: Boolean;
  };
};

export const MenuIconWithBadge = ({ sx, data }: MenuIconWithBadgeProps) => {
  return (
    <Badge
      sx={{
        "&& .MuiBadge-badge": {
          background: "#fff",
          color: "#000",
          top: "10px",
          right: "10px",
          width: "16px",
          height: "16px",
          padding: "0",
          fontSize: "10px",
          minWidth: "16px",
        },
      }}
      badgeContent={0}
      color={"primary"}
      showZero
    >
      <IconButton
        sx={sx}
        key={data.id}
        disableRipple
        onClick={() => {
          console.log("clicked");
        }}
      >
        {data.icon}
      </IconButton>
    </Badge>
  );
};
