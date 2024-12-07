import { Button } from "@mui/material";

interface buttonProps {
  title: string;
  onClick: () => void;
  type?: "submit";
  isDisabled?: boolean;
}

export const PrimaryButton = ({ title, onClick, type, isDisabled }: buttonProps) => {
  return (
    <Button
      disabled={isDisabled}
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
