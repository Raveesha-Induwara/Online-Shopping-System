import Slider from "react-slick";
import { Box, Typography, Card, CardContent, CardMedia, Rating, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { relatedProducts, CategoryType, ProductType } from "../../assets/relatedProducts"; 
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";


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

  // Carousel settings
  const carouselSettings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 3000,
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
    navigate(`/category/${categoryName.toLowerCase()}`);
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
        {relatedProducts.map((categoryData: CategoryType, index: number) => (
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
              onClick={() => handleCategoryClick(categoryData.category_name)}
            >
              {categoryData.category_name}
            </Typography>
            <Slider {...carouselSettings}>
              {categoryData.products.map((product: ProductType, productIndex: number) => (
                <Box key={productIndex} sx={{ px: 2 }}>
                  <Card
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
                    {/* Product Image */}
                    <CardMedia
                      component="img"
                      height="140"
                      image={product.product_image}
                      alt={product.product_name}
                      sx={{
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />

                    {/* Product Info */}
                    <CardContent>
                      <Typography
                        fontSize="17px"
                        sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}
                      >
                        {product.product_name}
                      </Typography>
                      <Rating
                        value={product.product_rate}
                        precision={0.5}
                        readOnly
                        size="small"
                        sx={{ marginY: 1 }}
                      />
                      <Typography fontSize="15px" color="#8c7ae6">
                        ${product.product_price.toFixed(2)}
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
                </Box>
              ))}
            </Slider>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RelatedProducts;
