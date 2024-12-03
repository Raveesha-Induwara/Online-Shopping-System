import { Button } from "@mui/material";
import React from "react";

interface buttonProps {
  title: string;
}

export const PrimaryButton = ({ title }: buttonProps) => {
  return (
    <Button
      variant="contained"
      sx={{
        background: "linear-gradient(45deg, #185A9D 30%, #43CEA2 90%)",
      }}
    >
      {title}
    </Button>
  );
};
