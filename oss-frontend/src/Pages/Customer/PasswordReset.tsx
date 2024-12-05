import { useState } from "react";
import { Container, Button, TextField, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavBar } from "../../Components/NavBar-reg";
import "../../Pages/Customer/Login.css";

type FormValue = {
  newpassword: string;
  confirmpassword: string;
};

const PasswordReset = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();
  const [data, setData] = useState({ email: "", password: "" });
  const onSubmit: SubmitHandler<FormValue> = (data) => {};

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
                    Password Reset
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
                      label="New Password"
                      type="password"
                      placeholder="Enter new password"
                      {...register("newpassword", {
                        required: "New password is required",
                        minLength: {
                          value: 6,
                          message: "Password should be atleast 6 characters",
                        },
                      })}
                    />
                    {errors.newpassword && (
                      <p className="error-msg">{errors.newpassword.message}</p>
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
                      label="Confirm Password"
                      type="password"
                      placeholder="Confirm your password"
                      {...register("confirmpassword", {
                        required: "Password confirmation is required",
                        minLength: {
                          value: 6,
                          message: "Password should be atleast 6 characters",
                        },
                      })}
                    />
                    {errors.confirmpassword && (
                      <p className="error-msg">
                        {errors.confirmpassword.message}
                      </p>
                    )}

                    <Button
                      style={{ marginTop: "20px" }}
                      sx={{ backgroundColor: "#185A9D" }}
                      type="submit"
                      variant="contained"
                      fullWidth
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
export default PasswordReset;
