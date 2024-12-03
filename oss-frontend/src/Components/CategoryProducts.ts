export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
    category: string;
  }
  
  // Dummy product data
  export const products: Product[] = [
    {
      id: 1,
      name: "Modern Form Maxi - Gown",
      image: "https://via.placeholder.com/300x400",
      price: 5500,
      rating: 4.5,
      category: "Dresses",
    },
    {
      id: 2,
      name: "Navy Blue Maxi - Gown",
      image: "https://via.placeholder.com/300x400",
      price: 7000,
      rating: 4.0,
      category: "Dresses",
    },
    {
      id: 3,
      name: "Classic Black Gown",
      image: "https://via.placeholder.com/300x400",
      price: 6500,
      rating: 4.8,
      category: "Dresses",
    },
    {
      id: 4,
      name: "Royal Blue Gown",
      image: "https://via.placeholder.com/300x400",
      price: 7500,
      rating: 5.0,
      category: "Dresses",
    },
    {
      id: 5,
      name: "Stylish Running Shoes",
      image: "https://via.placeholder.com/300x400",
      price: 4500,
      rating: 4.2,
      category: "Shoes",
    },
    {
      id: 6,
      name: "Elegant Mobile Case",
      image: "https://via.placeholder.com/300x400",
      price: 1500,
      rating: 4.1,
      category: "Accessories",
    },
    {
      id: 7,
      name: "Gaming Laptop",
      image: "https://via.placeholder.com/300x400",
      price: 95000,
      rating: 4.9,
      category: "Laptops",
    },
    {
      id: 8,
      name: "Casual Black T-Shirt",
      image: "https://via.placeholder.com/300x400",
      price: 1200,
      rating: 4.3,
      category: "Tshirts",
    },
  ];
  