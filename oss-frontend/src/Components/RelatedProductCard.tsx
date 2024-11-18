import {
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

interface RelatedProductCardProps {
  image: string;
  title: string;
  rating: number;
  price: string;
}
export const RelatedProductCard = ({
  image,
  title,
  rating,
  price,
}: RelatedProductCardProps) => {
  return (
    <ButtonBase sx={{ display: "block", textAlign: "inherit" }} disableRipple>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          image={image}
          sx={{
            height: 250,
            width: "100%",
            objectFit: "contain", // Keeps the whole image visible
          }}
        />
        <CardContent>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            sx={{ color: "text.secondary" }}
          >
            {title}
          </Typography>
          <Rating name="read-only" value={rating} readOnly size="small" />
          <Typography variant="subtitle2" fontWeight={700} color="#CA270A">
            {price}
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
};
