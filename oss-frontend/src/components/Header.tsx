import React from "react";
import { AppBar, Toolbar, InputBase, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(45deg, #185A9D 30%, #43CEA2 90%)",
        transform: "translateZ(0)",
      }}
    >
      <Toolbar>
        <Grid container alignItems="center">
          {/* System Name */}
          <Grid item>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "white",
                paddingLeft: "16px",
              }}
            >
              Online Shopping System
            </Typography>
          </Grid>

          {/* Spacer */}
          <Grid item xs></Grid>

          {/* Icons Section */}
          <Grid item>
            <InputBase
              placeholder="Search here"
              sx={{
                opacity: 0.6,
                padding: "0px 8px",
                fontSize: "0.8rem",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
                "& .MuiSvgIcon-root": {
                  marginRight: "8px",
                },
              }}
              startAdornment={<SearchIcon fontSize="small" />}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
