import * as React from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";
import { Card, Paper, Box } from "@mui/material";
import { PrimaryButton } from "./PrimaryButton";
import { useForm } from "react-hook-form";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const DeliveryDetailsInputForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  return (
    <Paper
      elevation={10}
      sx={{
        height: "75%",
        width: "50%",
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
              id="first-name"
              // name="first-name"
              type="name"
              placeholder="John"
              autoComplete="first name"
              required
              size="small"
              {...register("first-name", { required: true })}
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="last-name" required>
              Last name
            </FormLabel>
            <OutlinedInput
              id="last-name"
              // name="last-name"
              type="last-name"
              placeholder="Snow"
              autoComplete="last name"
              required
              size="small"
              {...register("last-name", { required: true })}
            />
          </FormGrid>
          <FormGrid size={{ xs: 12 }}>
            <FormLabel htmlFor="address1" required>
              Address line 1
            </FormLabel>
            <OutlinedInput
              id="address1"
              // name="address1"
              type="address1"
              placeholder="Street name and number"
              autoComplete="shipping address-line1"
              required
              size="small"
              {...register("address1", { required: true })}
            />
          </FormGrid>
          <FormGrid size={{ xs: 12 }}>
            <FormLabel htmlFor="address2">Address line 2</FormLabel>
            <OutlinedInput
              id="address2"
              // name="address2"
              type="address2"
              placeholder="Apartment, suite, unit, etc. (optional)"
              autoComplete="shipping address-line2"
              required
              size="small"
              {...register("address2", { required: true })}
            />
          </FormGrid>
          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="city" required>
              City
            </FormLabel>
            <OutlinedInput
              id="city"
              // name="city"
              type="city"
              placeholder="New York"
              autoComplete="City"
              required
              size="small"
              {...register("city", { required: true })}
            />
          </FormGrid>
          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="state" required>
              State
            </FormLabel>
            <OutlinedInput
              id="state"
              // name="state"
              type="state"
              placeholder="NY"
              autoComplete="State"
              required
              size="small"
              {...register("state", { required: true })}
            />
          </FormGrid>
          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="zip" required>
              Zip / Postal code
            </FormLabel>
            <OutlinedInput
              id="zip"
              // name="zip"
              type="zip"
              placeholder="12345"
              autoComplete="shipping postal-code"
              required
              size="small"
              {...register("zip", { required: true })}
            />
          </FormGrid>
          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="country" required>
              Country
            </FormLabel>
            <OutlinedInput
              id="country"
              // name="country"
              type="country"
              placeholder="United States"
              autoComplete="shipping country"
              required
              size="small"
              {...register("country", { required: true })}
            />
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
