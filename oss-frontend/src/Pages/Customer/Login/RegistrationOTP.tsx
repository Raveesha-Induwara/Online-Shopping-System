import { useState } from "react";
import { Container, Button, TextField, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavBar } from "../../../Components/NavBar-reg";
import "../Login/Login.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

type FormValue = {
  otp: string;
};

const RegistrationOTP = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({ otp: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResend = () => {
    alert("Text clicked!");
  };

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    axios
      .post("http://localhost:8088/api/v1/auth/signup/client", {
        firstName: location.state.firstName,
        lastName: location.state.lastName,
        email: location.state.email,
        password: location.state.password,
        otp: data.otp,
      })
      .then((response) => {
        // alert(response.data.message);
        setError("");
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("cartItemCount", '0');
        navigate("/customer/dashboard");
      })
      .catch((error) => {
        setError(error.response.data.result);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="bg-color">
        <Container>
          <div className="form-wrapper">
            <Grid>
              <Grid size={{ xs: 10, sm: 10, lg: 10, md: 10 }}>
                <Box>
                  <Typography
                    sx={{
                      color: "white",
                      padding: "10px",
                      textAlign: "center",
                      backgroundColor: " #185A9D",
                      borderRadius: "18px 18px 0px 0px",
                    }}
                  >
                    Registration - OTP Verification
                  </Typography>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box sx={{ padding: "20px" }}>
                    <TextField
                      fullWidth
                      sx={{
                        width: "100%",
                        marginTop: "20px",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "gray",
                          },
                          "&:hover fieldset": {
                            borderColor: "gray",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "gray",
                          },
                        },
                      }}
                      size="small"
                      label="OTP"
                      type="otp"
                      placeholder="Enter your OTP"
                      {...register("otp", {
                        required: "OTP is required",
                        minLength: {
                          value: 6,
                          message: "OTP should be 6 digits",
                        },
                      })}
                    />
                    {errors.otp && (
                      <p className="error-msg">{errors.otp.message}</p>
                    )}

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        marginTop: 1,
                        color: "grey",
                      }}
                    >
                      <Typography
                        // variant="h6"
                        fontSize={15}
                        // component="div"
                        sx={{ cursor: "pointer" }}
                        onClick={handleResend}
                      >
                        Resend OTP
                      </Typography>
                    </Box>

                    <Button
                      style={{ marginTop: "20px" }}
                      sx={{ backgroundColor: "#185A9D" }}
                      type="submit"
                      variant="contained"
                      fullWidth
                      onClick={() => {
                        navigate("/customer/dashboard");
                      }}
                    >
                      Verify
                    </Button>
                  </Box>
                </form>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default RegistrationOTP;
