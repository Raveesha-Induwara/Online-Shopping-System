import { useState } from "react";
import { Container, Button, TextField, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavBar } from "../../../Components/NavBar-reg";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import axios from "axios";

type FormValue = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<FormValue>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    axios
      .post("http://localhost:8088/api/v1/auth/signup/client/create-otp", {
        email: data.email,
      })
      .then((response) => {
        // alert(response.data.message);
        localStorage.setItem("userEmail", data.email);
        setError("");
        navigate("/customer/RegistrationOTP", {
          state: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
          },
        });
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
                    Register Customer
                  </Typography>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box sx={{ padding: "20px" }}>
                    <TextField
                      fullWidth
                      sx={{
                        width: "100%",
                        // backgroundColor: 'black', // Background color
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
                      label="First Name"
                      placeholder="Enter your first name"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                    />
                    {errors.firstName && (
                      <p className="error-msg">{errors.firstName.message}</p>
                    )}
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
                      label="Last Name"
                      placeholder="Enter your last name"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                    />
                    {errors.lastName && (
                      <p className="error-msg">{errors.lastName.message}</p>
                    )}

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
                      label="Email"
                      placeholder="Enter your eamil"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          message: "Invalid Email",
                        },
                      })}
                    />
                    {errors.email && error == "" && (
                      <p className="error-msg">{errors.email.message}</p>
                    )}
                    {error != "" && <p className="error-msg">{error}</p>}

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
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password should be atleast 6 characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="error-msg">{errors.password.message}</p>
                    )}

                    <Button
                      style={{ marginTop: "20px" }}
                      sx={{ backgroundColor: "#185A9D" }}
                      type="submit"
                      variant="contained"
                      fullWidth
                    >
                      Submit
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
export default RegistrationForm;
