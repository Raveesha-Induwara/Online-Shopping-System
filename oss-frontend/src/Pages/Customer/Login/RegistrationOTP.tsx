import { useState } from "react";
import { Container, Button, TextField, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavBar } from "../../../Components/NavBar-reg";
import "../Login/Login.css";

type FormValue = {
  otp: string;
};

const RegistrationOTP = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();
  const [data, setData] = useState({ otp: "" });
  const onSubmit: SubmitHandler<FormValue> = (data) => {};
  const handleResend = () => {
    // alert("Text clicked!");
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
