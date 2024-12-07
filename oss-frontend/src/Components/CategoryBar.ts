export interface Category {
    id: number;
    category_name: string;
    category_description: string;
    category_image: string;
    average_price: number;
    average_rate: number;
  }
  
  export const categories: Category[] = [
    {
      id: 1,
      category_name: "Shoes",
      category_description: "A wide variety of shoes for every occasion and style.",
      category_image: "https://img.freepik.com/premium-photo/shoe-advertising-photography_742418-34967.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
      average_price: 120,
      average_rate: 4.5,
    },
    {
        id: 2,
        category_name: "Accessories",
        category_description: "Beautiful accessories to complement your style.",
        category_image: "https://img.freepik.com/premium-photo/gold-jewelry-displayed-store_674594-18761.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        average_price: 500,
        average_rate: 4.8,
      },
      {
        id: 3,
        category_name: "Frocks",
        category_description: "Elegant and stylish frocks for all occasions.",
        category_image: "https://img.freepik.com/premium-photo/beautiful-elegant-evening-women-s-dress-white-background_236836-26253.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        average_price: 50,
        average_rate: 4.3,
      },
    {
      id: 4,
      category_name: "Perfume",
      category_description: "Long lasting eligant perfumes",
      category_image: "https://img.freepik.com/premium-psd/perfume-bottle-sand_23-2148961294.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
      average_price: 800,
      average_rate: 4.7,
    },
 

    {
      id: 5,
      category_name: "T-shirts",
      category_description: "Casual and trendy t-shirts for everyday wear.",
      category_image: "https://img.freepik.com/premium-photo/ector-think-positive-be-positive-typography-tshirt-design_1080184-378.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
      average_price: 25,
      average_rate: 4.1,
    },

    {
        id: 6,
        category_name: "Bags",
        category_description: "High-performance laptops for work and gaming.",
        category_image: "https://img.freepik.com/premium-photo/woman-leather-fashion-bag_1339-110127.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        average_price: 1500,
        average_rate: 4.6,
      },
  ];
  