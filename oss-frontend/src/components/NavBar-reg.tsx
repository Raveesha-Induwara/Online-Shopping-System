import {
    AppBar,
    Toolbar,
    Box,
    Icon,
    Typography,
} from "@mui/material";
import {
    ShoppingCart,
} from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const navigate = useNavigate()
    const handleTextClick = () => {
        // alert("Text clicked!");
    };
    const handleLoginClick = () => {
        navigate("/customer/loginForm");
    };
    

    return (
      <AppBar
        position="fixed"
        sx={{ background: "linear-gradient(45deg, #185A9D 30%, #43CEA2 90%)" }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Icon
              // size="large"
              // fontSize="large"
              // edge="start"
              // color="inherit"
              // aria-label="logo"
              // sx={{ mr: 3 }}
              >
                <ShoppingCart sx={{ fontSize: 30 }} />
              </Icon>

              <Typography fontSize={30}>Online Shopping</Typography>
              <Typography
                // variant="h6"
                fontSize={15}
                // component="div"
                sx={{ cursor: "pointer" }}
                onClick={handleTextClick}
              >
                About Us
              </Typography>
              <Typography
                // variant="h6"
                fontSize={15}
                // component="div"
                sx={{ cursor: "pointer" }}
                onClick={handleTextClick}
              >
                Contact Us
              </Typography>
            </Box>

            {/* Touchable Text */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography
                fontSize={15}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/customer");
                }}
              >
                Register
              </Typography>

              <Typography
                // variant="h6"
                fontSize={15}
                // component="div"
                sx={{ cursor: "pointer" }}
                onClick={handleLoginClick}
              >
                Login
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    );
};