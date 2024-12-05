import Slider from "react-slick";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Rating,
  IconButton,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  relatedData,
  Category,
  Product,
} from "../../../assets/relatedProducts";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: 0,
      top: "50%",
      zIndex: 1,
      transform: "translateY(-50%)",
      color: "black",
    }}
  >
    <ArrowBackIos />
  </IconButton>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: 0,
      top: "50%",
      zIndex: 1,
      transform: "translateY(-50%)",
      color: "black",
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const RelatedProducts = () => {
  const navigate = useNavigate();

  // Group products by category
  const groupedData = relatedData.categories.map((category: Category) => ({
    category,
    products: relatedData.products,
  }));

  // Carousel settings
  const carouselSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/customer/category/${categoryName.toLowerCase()}`);
  };

  return (
    <Box>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          mb: 2,
          textAlign: "center",
          marginTop: "4%",
          marginLeft: "5%",
          color: "#185a9d",
        }}
      >
        Related Products
      </Typography>

      <Box>
        {groupedData.map((group, index) => (
          <Box key={index} sx={{ mb: 5, mx: "2%" }}>
            {/* Category Section */}
            <Typography
              variant="h6"
              fontWeight="bold"
              textAlign="left"
              marginLeft="3%"
              textTransform="uppercase"
              color="#40739e"
              sx={{ mb: 2, cursor: "pointer" }}
              onClick={() => handleCategoryClick(group.category.name)}
            >
              {group.category.name}
            </Typography>
            <Slider {...carouselSettings}>
              {group.products.map((product: Product, productIndex: number) => (
                <Card
                  key={productIndex}
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
                    image={product.img}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography fontSize="17px" sx={{ fontWeight: "bold" }}>
                      {product.name}
                    </Typography>
                    <Rating
                      value={product.rating}
                      precision={0.5}
                      readOnly
                      size="small"
                      sx={{ marginY: 1 }}
                    />
                    <Typography fontSize="15px" color="#8c7ae6">
                      ${product.price}
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
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </Card>
              ))}
            </Slider>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RelatedProducts;
