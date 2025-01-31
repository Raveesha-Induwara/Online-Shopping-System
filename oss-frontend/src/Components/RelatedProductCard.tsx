import {
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface RelatedProductCardProps {
  id: number;
  name: string;
  description: string;
  category: string;
  imagUrl: string;
  rate: number;
  price: number;
}
export const RelatedProductCard = ({
  id,
  name,
  description,
  category,
  imagUrl,
  rate,
  price,
}: RelatedProductCardProps) => {
  const navigate = useNavigate();

  return (
    <ButtonBase sx={{ display: "block", textAlign: "inherit" }} disableRipple>
      <Card
        onClick={() =>
          navigate(`/customer/productDetails/${id}`, {
            state: {
              id: id,
              name: name,
              description: description,
              category: category,
              imageUrl: imagUrl,
              price: price,
              rate: rate,
            },
          })
        }
        sx={{
          maxWidth: 200,
          borderRadius: 2,
          boxShadow: 3,
          overflow: "hidden",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="210"
          image={imagUrl}
          alt={name}
        />
        <CardContent>
          <Typography fontSize="17px" sx={{ fontWeight: "bold" }}>
            {name}
          </Typography>
          <Rating
            value={~~rate}
            precision={0.5}
            readOnly
            size="small"
            sx={{ marginY: 1 }}
          />
          <Typography fontSize="15px" color="#8c7ae6">
            ${price}
          </Typography>
        </CardContent>

        {/* Add to Cart Button */}
        <IconButton
          color="primary"
          aria-label="add to cart"
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "#ffffff",
            "&:hover": {
              background: "#f0f0f0",
            },
          }}
          onClick={() => {}} // Add to Cart Functionality
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </Card>
    </ButtonBase>
  );
};
