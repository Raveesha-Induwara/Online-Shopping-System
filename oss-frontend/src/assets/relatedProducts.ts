// Define interfaces for the category and product data
export interface Category {
  id: number;
  img: string;
  name: string;
}

export interface Product {
  name: string;
  price: string;
  img: string;
  rating: number;
  categoryId: number; // Link the product to a category
}

// Export your data
export const relatedData = {
  categories: [
    { id: 1, img: "https://img.freepik.com/free-photo/bride-wedding-dress_144627-29502.jpg", name: "Dresses" },
    { id: 2, img: "https://img.freepik.com/free-photo/bride-wedding-dress_144627-29502.jpg", name: "Shirts" },
    { id: 3,img: "https://img.freepik.com/free-photo/bride-wedding-dress_144627-29502.jpg", name: "Hats" },
  ] as Category[],

  products: [
    {
      name: "Modern Form",
      price: "8,500",
      img: "https://img.freepik.com/free-photo/bride-wedding-dress_144627-29502.jpg",
      rating: 4.5,
      categoryId: 1, // Linked to "Dresses"
    },
    {
      name: "Navy Blue Maxi",
      price: "7,000",
      img: "https://img.freepik.com/free-photo/handsome-young-woman-lon-dress-poses-camera-picture-isolated-yellow-background_132075-9438.jpg",
      rating: 4,
      categoryId: 1, // Linked to "Dresses"
    },
    {
      name: "Modern Form",
      price: "8,500",
      img: "https://img.freepik.com/free-photo/portrait-fashionable-girl-red-evening-dress-posed-background-mirror-window-modern-building_627829-11939.jpg",
      rating: 4.5,
      categoryId: 1, // Linked to "Dresses"
    },
    {
      name: "Modern Form",
      price: "5,500",
      img: "https://img.freepik.com/free-photo/portrait-fashionable-girl-red-evening-dress-posed-background-mirror-window-modern-building_627829-11939.jpg",
      rating: 4.5,
      categoryId: 1, // Linked to "Dresses"
    },
    {
      name: "Modern Maxi",
      price: "8,500",
      img: "https://img.freepik.com/free-photo/full-length-portrait-handsome-serious-man_171337-17388.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
      rating: 4.5,
      categoryId: 2, // Linked to "Shirts"
    },
    {
      name: "Navy Blue",
      price: "7,000",
      img: "https://img.freepik.com/premium-photo/full-length-portrait-handsome-businessman-isolated-gray-wall_171337-83337.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
      rating: 4,
      categoryId: 2, // Linked to "Shirts"
    },
    {
      name: "Modern Form",
      price: "8,500",
      img: "https://img.freepik.com/free-photo/stylish-woman-spending-time-summer-field_1157-36070.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
      rating: 4.5,
      categoryId: 2, // Linked to "Shirts"
    },
    {
      name: "Modern Form",
      price: "8,500",
      img: "https://img.freepik.com/premium-photo/confident-businessman-confident-young-man-full-suit-adjusting-his-sleeve-looking-away-while-standing-outdoors-with-cityscape-background_233298-701.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
      rating: 4.5,
      categoryId: 2, // Linked to "Shirts"
    },
    {
      name: "Trendy Hat",
      price: "3,000",
      img: "https://img.freepik.com/free-photo/young-guy-with-modern-fashion-hat_132075-1016.jpg",
      rating: 4.8,
      categoryId: 3, // Linked to "Hats"
    },
    {
      name: "Classic Cap",
      price: "2,500",
      img: "https://img.freepik.com/free-photo/young-guy-modern-cap-posing-city_132075-6781.jpg",
      rating: 4.3,
      categoryId: 3, // Linked to "Hats"
    },
    {
      name: "Classic Cap",
      price: "2,500",
      img: "https://img.freepik.com/free-photo/young-guy-modern-cap-posing-city_132075-6781.jpg",
      rating: 4.3,
      categoryId: 3, // Linked to "Hats"
    },
    {
      name: "Classic Cap",
      price: "2,500",
      img: "https://img.freepik.com/free-photo/young-guy-modern-cap-posing-city_132075-6781.jpg",
      rating: 4.3,
      categoryId: 3, // Linked to "Hats"
    },
  ] as Product[],
};
