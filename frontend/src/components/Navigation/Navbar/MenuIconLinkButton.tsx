import * as React from "react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

type MenuIconLinkButtonProps = {
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

export const MenuIconLinkButton = ({ sx, data }: MenuIconLinkButtonProps) => {
  const navigate = useNavigate();
  return (
    <IconButton
      sx={sx}
      key={data.id}
      disableRipple
      onClick={() => {
        navigate(`${data.path}`);
      }}
    >
      {data.icon}
    </IconButton>
  );
};
