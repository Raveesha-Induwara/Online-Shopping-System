import { useState } from "react";
import { Container, Button, TextField, Box, Typography, MenuItem, FormControlLabel, Checkbox } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useForm, SubmitHandler } from "react-hook-form";
import { NavBar } from "../components/NavBar-reg";
import { useNavigate } from 'react-router-dom';
import '../App.css'

type FormValue = {
    firstname: string,
    lastname: string,
    role: string,
    email: string,
    password: string,
}

const Registrationform = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValue>()
    const [data, setData] = useState({ firstname: '', lastname: '', role: '', email: '', password: '' })
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormValue> = (data) => {
        navigate("/RegistrationOTP");
    }

    return (
        <div>

            <NavBar />

            <div className="bg-color">
                <Box sx={{ marginTop: '64px', backgroundColor: 'white' }}>
                    <Container >
                        <div className="form-wrapper">
                            <Grid>
                                <Grid size={{ xs: 10, sm: 10, lg: 10, md: 10 }} >
                                    <Box >
                                        <Typography sx={{
                                            color: "white",
                                            padding: '10px',
                                            textAlign: 'center',
                                            backgroundColor: ' #185A9D',
                                            borderRadius: '18px 18px 0px 0px'
                                        }}>
                                            Register User
                                        </Typography>
                                    </Box>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Box sx={{ padding: '20px' }}>
                                            <TextField fullWidth
                                                sx={{
                                                    width: '100%',
                                                    // backgroundColor: 'black', // Background color
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: 'gray',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'gray',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'gray',
                                                        },
                                                    },
                                                }}
                                                size="small"
                                                label="First Name"
                                                placeholder="Enter your first name"
                                                {
                                                ...register("firstname", {
                                                    required: "First Name is required",
                                                })
                                                }
                                            />
                                            {
                                                errors.firstname && (
                                                    <p className="error-msg">{errors.firstname.message}</p>
                                                )
                                            }

                                            <TextField fullWidth
                                                sx={{
                                                    width: '100%',
                                                    marginTop: '20px',
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: 'gray',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'gray',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'gray',
                                                        },
                                                    },
                                                }}
                                                size="small"
                                                label="Last Name"
                                                placeholder="Enter your last name"
                                                {
                                                ...register("lastname", {
                                                    required: "Last Name is required",
                                                })
                                                }
                                            />
                                            {
                                                errors.lastname && (
                                                    <p className="error-msg">{errors.lastname.message}</p>
                                                )
                                            }

                                            <TextField fullWidth
                                                sx={{
                                                    width: '100%',
                                                    marginTop: '20px',
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: 'gray',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'gray',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'gray',
                                                        },
                                                    },
                                                }}
                                                size="small"
                                                label="Email"
                                                placeholder="Enter your eamil"
                                                {
                                                ...register("email", {
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                                        message: "Invalid Email"
                                                    }
                                                })
                                                }
                                            />
                                            {
                                                errors.email && (
                                                    <p className="error-msg">{errors.email.message}</p>
                                                )
                                            }

                                            <TextField fullWidth
                                                sx={{
                                                    width: '100%',
                                                    marginTop: '20px',
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: 'gray',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'gray',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'gray',
                                                        },
                                                    },
                                                }}
                                                size="small"
                                                label="Password"
                                                type="password"
                                                placeholder="Enter your password"
                                                {
                                                ...register("password", {
                                                    required: "Password is required",
                                                    minLength: {
                                                        value: 6,
                                                        message: "Password should be atleast 6 characters"
                                                    }

                                                })
                                                }
                                            />
                                            {
                                                errors.password && (
                                                    <p className="error-msg">{errors.password.message}</p>
                                                )
                                            }

                                            <TextField
                                                select
                                                fullWidth
                                                sx={{
                                                    width: '100%',
                                                    marginTop: '20px',
                                                    '& .MuiOutlinedInput-root': {
                                                        // height: '40px',
                                                        // marginTop:'10px',
                                                        // flexDirection:'row',
                                                        '& fieldset': {
                                                            borderColor: 'gray',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'gray',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'gray',
                                                        },
                                                    },
                                                }}
                                                label="User Role"
                                                defaultValue=""
                                                {
                                                ...register("role", {
                                                    required: "Role is required",
                                                })
                                                }
                                            >
                                                <MenuItem value="customer">Customer</MenuItem>
                                                <MenuItem value="admin">Admin</MenuItem>
                                            </TextField>
                                            {
                                                errors.role && (
                                                    <p className="error-msg">{errors.role.message}</p>
                                                )
                                            }
                                            <Button style={{ marginTop: '20px' }} sx={{ backgroundColor: '#185A9D', }} type="submit" variant="contained" fullWidth>Sign up</Button>
                                        </Box>
                                    </form>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </Box>
            </div>
        </div>
    )

}
export default Registrationform;