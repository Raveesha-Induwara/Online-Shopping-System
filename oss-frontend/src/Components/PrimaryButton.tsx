import { Button } from "@mui/material";
import React from "react";

interface buttonProps {
  title: string;
  onClick: () => {};
  type?: "submit";
}

export const PrimaryButton = ({ title, onClick, type }: buttonProps) => {
  return (
    <Button
      variant="contained"
      sx={{
        background: "linear-gradient(45deg, #185A9D 30%, #43CEA2 90%)",
      }}
      onClick={onClick}
      type={type}
    >
      {title}
    </Button>
  );
};
