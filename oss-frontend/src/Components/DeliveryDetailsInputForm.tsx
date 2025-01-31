import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";
import { Paper, Box } from "@mui/material";
import { PrimaryButton } from "./PrimaryButton";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface DeliveryDetailsProps {
  closeDialog: () => void;
}

interface User {
  customerId: string;
  email: string;
  firstName: string;
  lastName: string;
  mobileNo: string;
  address: string;
  gender: string;
  dateOfBirth: string;
  imageUrl: string;
  city: string;
  postalCode: string;
  district: string;
  province: string;
}

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const DeliveryDetailsInputForm = ({
  closeDialog,
}: DeliveryDetailsProps) => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    try {
      axios
        .get("http://localhost:8082/api/v1/customers/getuser", {
          params: {
            email: "rinduwara0@gmail.com",
          },
        })
        .then((response) => {
          setUserData(response.data);
        });
    } catch (error) {
      alert(error);
    }
  }, []);

  const onSubmit = handleSubmit((data) => {
    setUserData((prevData) => ({
      ...prevData,
      ...data,
    }));
    navigate("/customer/deliveryDetails", { state: data });
    closeDialog();
  });

  return (
    <Paper
      elevation={10}
      sx={{
        height: "100%",
        // width: "100%",
        padding: 3,
      }}
    >
      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="first-name" required>
              First name
            </FormLabel>
            <OutlinedInput
              id="firstName"
              value={userData?.firstName}
              type="name"
              placeholder="First name"
              autoComplete="first name"
              required
              size="small"
              {...register("firstName", {
                required: { value: true, message: "First name is required" },
              })}
            />
            <p style={{ color: "red", fontSize: "small", paddingTop: 1 }}>
              {JSON.stringify(errors.firstName?.message)}
            </p>
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="last-name" required>
              Last name
            </FormLabel>
            <OutlinedInput
              id="lastName"
              value={userData?.lastName}
              type="last-name"
              placeholder="Last name"
              autoComplete="last name"
              required
              size="small"
              {...register("lastName", {
                required: { value: true, message: "Last name is required" },
              })}
            />
            <p style={{ color: "red", fontSize: "small", paddingTop: 1 }}>
              {JSON.stringify(errors.lastName?.message)}
            </p>
          </FormGrid>
          <FormGrid size={{ xs: 12 }}>
            <FormLabel htmlFor="address1" required>
              Address line 1
            </FormLabel>
            <OutlinedInput
              id="address1"
              value={userData?.address}
              type="address1"
              placeholder="Street name and number"
              autoComplete="shipping address-line1"
              required
              size="small"
              {...register("address1", {
                required: { value: true, message: "Address is required" },
              })}
            />
            <p style={{ color: "red", fontSize: "small", paddingTop: 1 }}>
              {JSON.stringify(errors.address1?.message)}
            </p>
          </FormGrid>
          <FormGrid size={{ xs: 12 }}>
            <FormLabel htmlFor="address2">Address line 2</FormLabel>
            <OutlinedInput
              id="address2"
              // name="address2"
              type="address2"
              placeholder="Apartment, suite, unit, etc. (optional)"
              autoComplete="shipping address-line2"
              size="small"
              {...register("address2", { required: false })}
            />
          </FormGrid>
          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="city" required>
              City
            </FormLabel>
            <OutlinedInput
              id="city"
              value={userData?.city}
              type="city"
              placeholder="City"
              autoComplete="City"
              required
              size="small"
              {...register("city", {
                required: { value: true, message: "City is required" },
              })}
            />
            <p style={{ color: "red", fontSize: "small", paddingTop: 1 }}>
              {JSON.stringify(errors.city?.message)}
            </p>
          </FormGrid>
          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="state" required>
              District
            </FormLabel>
            <OutlinedInput
              id="district"
              value={userData?.district}
              type="state"
              placeholder="District"
              autoComplete="State"
              required
              size="small"
              {...register("district", {
                required: { value: true, message: "District is required" },
              })}
            />
            <p style={{ color: "red", fontSize: "small", paddingTop: 1 }}>
              {JSON.stringify(errors.district?.message)}
            </p>
          </FormGrid>
          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="zip" required>
              Zip / Postal code
            </FormLabel>
            <OutlinedInput
              id="zip"
              value={userData?.postalCode}
              type="zip"
              placeholder="12345"
              autoComplete="shipping postal-code"
              required
              size="small"
              {...register("zip", {
                required: { value: true, message: "Postal code is required" },
              })}
            />
            <p style={{ color: "red", fontSize: "small", paddingTop: 1 }}>
              {JSON.stringify(errors.zip?.message)}
            </p>
          </FormGrid>
          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="country" required>
              Province
            </FormLabel>
            <OutlinedInput
              id="province"
              value={userData?.province}
              type="province"
              placeholder="Province"
              autoComplete="shipping province"
              required
              size="small"
              {...register("province", {
                required: { value: true, message: "Province is required" },
              })}
            />
            <p style={{ color: "red", fontSize: "small", paddingTop: 1 }}>
              {JSON.stringify(errors.province?.message)}
            </p>
          </FormGrid>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormGrid size={{ xs: 12 }}>
              <FormControlLabel
                control={<Checkbox name="saveAddress" value="yes" />}
                label="Use this address for payment details"
              />
            </FormGrid>
            <Box>
              <PrimaryButton title="submit" onClick={onSubmit} type="submit" />
            </Box>
          </Box>
        </Grid>
      </form>
    </Paper>
  );
};
