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
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  product_name: string;
  product_description: string;
  product_category: string;
  imagUrl: string;
  product_price: number;
  product_rate: number;
}

interface Category {
  id: number;
  name: string;
  imageUrl: string;
}

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
  const [productData, SetProductData] = useState<Array<Product>>([]);
  const [categories, setCategories] = useState<Array<Category>>([]);
  const userId = localStorage.getItem("userId");
  console.log(userId);

  // get categories
  useEffect(() => {
    try {
      axios.get("http://localhost:8083/api/v1/categories").then((response) => {
        setCategories(response.data);
      });
    } catch (error) {
      alert(error);
    }
  }, []);

  // get products
  useEffect(() => {
    try {
      axios.get("http://localhost:8083/api/v1/products").then((response) => {
        SetProductData(response.data);
      });
    } catch (error) {
      alert(error);
    }
  }, []);

  // Group products by category
  // const groupedData = categories.map((category: Category) => ({
  //   category,
  //   products: relatedData.products,
  // }));

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
    navigate(`/customer/category/${categoryName}`, {
      state: { name: categoryName },
    });
  };

  const AddItemToCart = (
    userId: string | null,
    productId: number,
    name: string,
    description: string,
    price: number,
    quantity: number
  ) => {
    // try {
    //   axios.post(`http://localhost:8083/api/v1/carts/addItem`, {
    //     userId,
    //     productId,
    //     name,
    //     description,
    //     price,
    //     quantity,
    //   });
    // } catch (error) {
    //   alert(`Error adding item to cart: ${error}`);
    // }
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
        {categories.map((category, index) => (
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
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name}
            </Typography>

            {/* Products */}
            <Slider {...carouselSettings}>
              {productData
                .filter((product) => product.product_category === category.name)
                .map((product: Product, index: number) => (
                  <Card
                    key={index}
                    onClick={() =>
                      navigate(`/customer/productDetails/${product.id}`, {
                        state: {
                          id: product.id,
                          name: product.product_name,
                          description: product.product_description,
                          category: product.product_category,
                          imageUrl: product.imagUrl,
                          price: product.product_price,
                          rate: product.product_rate,
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
                      image={product.imagUrl}
                      alt={product.product_name}
                    />
                    <CardContent>
                      <Typography fontSize="17px" sx={{ fontWeight: "bold" }}>
                        {product.product_name}
                      </Typography>
                      <Rating
                        value={~~product.product_rate}
                        precision={0.5}
                        readOnly
                        size="small"
                        sx={{ marginY: 1 }}
                      />
                      <Typography fontSize="15px" color="#8c7ae6">
                        ${product.product_price}
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
                        onClick: () => {
                          AddItemToCart(
                            userId,
                            product.id,
                            product.product_name,
                            product.product_description,
                            product.product_price,
                            1
                          );
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
