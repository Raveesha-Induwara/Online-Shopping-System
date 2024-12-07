export interface ProductType {
  product_name: string;
  product_description: string;
  product_category:string;
  product_price: number;
  product_image: string;
  product_rate: number;
}

export interface CategoryType {
  category_name: string;
  products: ProductType[];
}


export const relatedProducts: CategoryType[] = [
  {
    category_name: "Shoes",
    products: [
      {
        product_name: "Athletic Shoes",
        product_description: "Have a rubber sole and canvas upper and are designed to be worn while doing physical activity",
        product_category: "Shoes",
        product_image: "https://img.freepik.com/premium-photo/running-shoes-man_22736-1185.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 59.99,
        product_rate: 4.5,
      },
      {
        product_name: "Basketball Shoes",
        product_description: "High-performance shoes for basketball players.",
        product_category: "Shoes",
        product_image: "https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 52.79,
        product_rate: 4.7,
      },
      {
        product_name: "Boat Shoes",
        product_description: " Canvas or leather slip-on shoes have rubber soles that feature a cut pattern to prevent slippage on wet decks.",
        product_category: "Shoes",
        product_image: "https://img.freepik.com/premium-photo/shoe-advertising-photography_742418-34967.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 45.99,
        product_rate: 5.2,
      },
      
      {
        product_name: "Loafers",
        product_description: "Made out of leather, loafers can serve as a good pair of business shoes.",
        product_category: "Shoes",
        product_image: "https://img.freepik.com/premium-photo/children-s-shoes-moccasins_102618-382.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 78.99,
        product_rate: 4,
      },
      
      {
        product_name: "Oxford shoes",
        product_description: "Classic dress shoes lace up and have a low heel with a slightly pointed toe. ",
        product_category: "Shoes",
        product_image: "https://img.freepik.com/free-photo/brown-leather-shoes_1203-8174.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 60.99,
        product_rate: 4.5,
      },
      
      {
        product_name: " Platform shoes",
        product_description: "Features a heel and a thick sole to elevate the foot off of the ground.",
        product_category: "Shoes",
        product_image: "https://img.freepik.com/free-photo/beautiful-shoes-with-bright_144627-7909.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 69.99,
        product_rate: 5.1,
      },
      
      {
        product_name: "Slingbacks",
        product_description: "Covered toe and a strap that goes around the heels to secure the shoe. ",
        product_category: "Shoes",
        product_image: "https://img.freepik.com/premium-photo/elegance-advantage-enhancing-brand-with-premium-packaging-captivating-hang-tags-tag-cards_1020495-64353.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 95.99,
        product_rate: 5.3,
      },
      
      {
        product_name: "Ankle boot",
        product_description: "A slip-on ankle boot with an elastic side panel is called a Chelsea boot",
        product_category: "Shoes",
        product_image: "https://img.freepik.com/premium-photo/zapato-mujer_1056055-460.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 72.99,
        product_rate:3.8,
      },
      
      {
        product_name: "Strappy sandals",
        product_description: "These sandals have straps across the foot and sometimes up the ankles. ",
        product_category: "Shoes",
        product_image: "https://img.freepik.com/premium-photo/women-s-fashion-shoes-isolated-white-background-women-s-fashion-concept_97567-679.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 45.79,
        product_rate: 4.9,
      },
      


      
    ],
  },
  {
    category_name: "Accessories",
    products: [
      {
        product_name: "Pearl Necklace",
        product_description: "Classic white pearl necklace with a sterling silver clasp, perfect for formal occasions.",
        product_category: "Accessories",
        product_image: "https://img.freepik.com/premium-photo/patterns-created-by-white-pearls-arranged-circular-necklace_1170794-395434.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 59.99,
        product_rate: 4.9,
      },
      {
        product_name: "Golden Pendant",
        product_description: "Chain with a oval-shaped pendant, ideal for gifting to loved ones.",
        product_category: "Accessories",
        product_image: "https://img.freepik.com/free-photo/shiny-gold-jewelry-symbol-wealth-generated-by-ai_188544-10733.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 42.99,
        product_rate: 4.4,
      },
      {
        product_name: "Layered Necklace",
        product_description: "Trendy layered necklace with gold-plated chains and natural stone accents for a bohemian vibe.",
        product_category: "Accessories",
        product_image: "https://img.freepik.com/premium-photo/unique-gold-neckless_1188452-5441.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 125.99,
        product_rate: 4.5,
      },
      {
        product_name: "Crystal Necklace",
        product_description: "Silver necklace featuring a sparkling crystal charm, adding elegance to any outfit",
        product_category: "Accessories",
        product_image: "https://img.freepik.com/premium-photo/pendant-decoration-with-pendant-made-white-small-beads_616001-16318.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 52.99,
        product_rate: 4.4,
      },
      {
        product_name: "Birthstone Pendant",
        product_description: "Personalized necklace with a birthstone pendant set in a sterling silver bezel..",
        product_category: "Accessories",
        product_image: "https://img.freepik.com/free-photo/elegant-rose-gold-necklace-with-diamond-ring-set-against-blurred-setting_157027-4050.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 85.99,
        product_rate: 3.8,
      },
      {
        product_name: "Rose Gold",
        product_description: "Minimalist rose gold necklace with a sleek bar pendant, great for everyday wear.",
        product_category: "Accessories",
        product_image: "https://img.freepik.com/free-photo/display-shiny-elegant-gold-chain_23-2149635314.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 39.99,
        product_rate: 4.4,
      },
 
      {
        product_name: "Infinity Necklace",
        product_description: "Elegant infinity symbol pendant on a gold chain, symbolizing eternal love and connection.",
        product_category: "Accessories",
        product_image: "https://img.freepik.com/premium-photo/elegant-diamond-necklaces_1188452-1909.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 97.99,
        product_rate: 4.3,
      },
      
      {
        product_name: "Floral Charm ",
        product_description: "Gold necklace featuring intricate floral charms, inspired by nature’s beauty.",
        product_category: "Accessories",
        product_image: "https://img.freepik.com/free-photo/pink-heart-shaped-pendant-purple-background-valentine-s-day_1057-35924.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 97.99,
        product_rate: 4.3,
      },
      
      {
        product_name: "Star and Moon Necklace",
        product_description: "Dainty necklace with celestial-themed star and moon charms, plated in silver.",
        product_category: "Accessories",
        product_image: "https://img.freepik.com/premium-photo/golden-crescent-moon-pendant-with-pearl-necklace-black-textured-background_400823-173.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 68.99,
        product_rate: 4.1,
      },
      
    ],
  },
  {
    category_name:"Frocks" ,
    products: [
      {
        product_name: "Spring Mildi dress",
        product_description: "A blue dress with a wale on the side",
        product_category: "dresses",
        product_image: "https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17506.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 399.99,
        product_rate: 4.6,
      },
      {
        product_name: "Evening Gown",
        product_description: "Elegant gown for evening occasions.",
        product_category: "Frocks",
        product_image: "https://img.freepik.com/free-photo/high-fashion-look-glamor-stylish-sexy-smiling-beautiful-young-woman-model-summer-black-hipster-dress_158538-12331.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 149.99,
        product_rate: 4.7,
      },
      {
        product_name: "Maxi Dress",
        product_description: "Elegant blue dress for occasions.",
        product_category: "Frocks",
        product_image: "https://img.freepik.com/premium-photo/fashionable-hair-disheveled-braid-around-head-happy-beautiful-young-model-girl-summer-blossom-park_137237-1647.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 120.99,
        product_rate: 3.2,
      },
      {
        product_name: "Summer frock",
        product_description: "A brown color sleevless dress for ladies.",
        product_category: "Frocks",
        product_image: "https://img.freepik.com/premium-photo/young-beautiful-woman-straw-hat-animal-prints-dress-holds-sunglasses-her-hands-while-posing_136403-15053.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 130.99,
        product_rate: 4.2,
      },
      {
        product_name: "Short colored dress",
        product_description: "Dress with a printed material with flowers in it.",
        product_category: "Frocks",
        product_image: "https://img.freepik.com/free-photo/curly-girl-beautiful-dress_144627-10117.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 149.99,
        product_rate: 4.7,
      },
      {
        product_name: "Sleevless Growm",
        product_description: "A green colored lined dress in linun material .",
        product_category: "Frocks",
        product_image: "https://img.freepik.com/free-photo/woman-green-dress-hat-yellow-background_1303-10512.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 135.99,
        product_rate: 4,
      },
      {
        product_name: "Occational maxi dress",
        product_description: "Elegant look purple colored dress with short top.",
        product_category: "Frocks",
        product_image: "https://img.freepik.com/premium-photo/beautiful-girl-posing-evening-dress-full-length-portrait-fashion-model_105609-1318.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 129.99,
        product_rate: 4.3,
      },
      {
        product_name: "Blue Wedding frock",
        product_description: "Women's MIidi Dresses 2024 Summer Casual Square Neck Short Sleeved.",
        product_category: "Frocks",
        product_image: "https://img.freepik.com/premium-photo/young-beauty-woman-fluttering-blue-dress-white-wall_93675-38785.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 1.99,
        product_rate: 4.7,
      },
      {
        product_name: "Summer Peplum",
        product_description: "Women Summer Peplum Dresses Spring V-Neck Short Sleeve Loose Waist",
        product_category: "Frocks",
        product_image: "https://img.freepik.com/free-photo/young-woman-beautiful-yellow-dress_1303-17536.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
        product_price: 110.99,
        product_rate: 4.9,
      },
    ],
  },
  {
    category_name:"Perfumes" ,
      products: [
        {
          product_name: "Vanilla Orchid",
          product_description: "A sweet and floral fragrance with vanilla, orchid petals, and creamy sandalwood.",
          product_category: "Perfumes",
          product_image: "https://img.freepik.com/premium-psd/perfume-bottle-sand_23-2148961294.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 659.99,
          product_rate: 4.8,
        },
        {
          product_name: "Jasmine Blossom",
          product_description: "Light and airy with enchanting notes of jasmine, green tea, and a hint of citrus.",
          product_category: "Perfumes",
          product_image: "https://img.freepik.com/premium-photo/bottle-with-transparent-color-cosmetics-background-jasmine-flowers_1048944-30176231.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 739.99,
          product_rate: 3.5,
        },
        {
          product_name: "Citrus Sunshine",
          product_description: "Bright and invigorating with zesty notes of lemon, orange, and a hint of ginger.",
          product_category: "Perfumes",
          product_image: "https://img.freepik.com/free-photo/beach-skincare-product-still-life_23-2150167937.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 520.99,
          product_rate: 3.9,
        },
        {
          product_name: "Mystic Woods",
          product_description: "Earthy and captivating with sandalwood, cedar, and a touch of amber.",
          product_category: "Perfumes",
          product_image: "https://img.freepik.com/premium-photo/magic-potion-bottle-forest_176873-1848.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 528.99,
          product_rate: 4.3,
        },
        {
          product_name: "Golden Amber",
          product_description: "A warm and sensual blend of amber, vanilla, and a whisper of patchouli.",
          product_category: "Perfumes",
          product_image: "https://img.freepik.com/free-photo/cosmetic-product-container-with-art-nouveau-inspired-sun-relief-background_23-2151420697.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 899.99,
          product_rate: 4.5,
        },
        {
          product_name: "Velvet Rose",
          product_description: "A romantic blend of rose petals, vanilla, and soft musk for a timeless floral scent.",
          product_category: "Perfumes",
          product_image: "https://images.unsplash.com/photo-1458538977777-0549b2370168?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D",
          product_price: 899.99,
          product_rate: 4.3,
        },
        {
          product_name: "Spiced Noir",
          product_description: "An exotic and bold scent featuring cardamom, black pepper, and smoky leather.",
          product_category: "Perfumes",
          product_image: "https://img.freepik.com/free-photo/red-composto-glass-jar-aroma-steam_114579-2422.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 529.99,
          product_rate: 4.2,
        },
        {
          product_name: "Lavender Fields",
          product_description: "Calming and soothing with fresh lavender, chamomile, and soft white musk.",
          product_category: "Perfumes",
          product_image: "https://img.freepik.com/premium-photo/bottles-essential-oil-lavender-flowers-bunch-table-retro-toned-selective-focusxaxa_629370-1020.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 469.99,
          product_rate: 4.2,
        },
        {
          product_name: "Ocean Breeze",
          product_description: "A refreshing aquatic fragrance with notes of sea salt, bergamot, and driftwood.",
          product_category: "Perfumes",
          product_image: "https://img.freepik.com/free-vector/elegant-glass-bottle-women-perfumes_88138-195.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 1299.99,
          product_rate: 4.8,
        },
       
      ],
    },
  {
    category_name: "Tshirts" ,
    products: [
      {
        product_name: "Monogram 1968",
        product_description: "Monogram Logo Graphic Classic T-Shirt",
        product_category: "Tshirts",
        product_image: "https://calvinklein.scene7.com/is/image/CalvinKlein/21898311_200_main?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
        product_price: 19.99,
        product_rate: 4.2,
      },
      {
        product_name: "Red Plain Tee",
        product_description: "Liquid Touch Crewneck T-Shirt",
        product_category: "Tshirts",
        product_image: "https://calvinklein.scene7.com/is/image/CalvinKlein/21871238_601_main?wid=428&hei=569&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
        product_price: 14.99,
        product_rate: 4.0,
      },
      {
        product_name: "Long sleeve",
        product_description: "Simple and comfortable ferrari desert top.",
        product_category: "Tshirts",
        product_image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/631324/13/mod01/fnd/PNA/fmt/png/Scuderia-Ferrari-Desert-Sun-Men's-Long-Sleeve-Shirt",
        product_price: 19.99,
        product_rate: 4.2,
      },
      {
        product_name: "Short sleeves",
        product_description: "Relaxed Washed Cotton T-shirt.",
        product_category: "Tshirts",
        product_image: "https://calvinklein-eu.scene7.com/is/image/CalvinKleinEU/J30J326153_CH2_main?wid=781&fmt=jpeg&qlt=95%2C1&op_sharpen=1&resMode=sharp2&op_usm=1%2C1%2C6%2C0&iccEmbed=0&printRes=72",
        product_price: 25.99,
        product_rate: 3.7,
      },
      {
        product_name: "Plain yellow",
        product_description: "Logo Faded Graphic Classic T-Shirt",
        product_category: "Tshirts",
        product_image: "https://calvinklein.scene7.com/is/image/CalvinKlein/21892825_280_main?wid=428&hei=569&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
        product_price: 17.99,
        product_rate: 3.4,
      },
      {
        product_name: "Plain White",
        product_description: "Ultra-Soft Modern Sleep Tee",
        product_category: "Tshirts",
        product_image: "https://calvinklein.scene7.com/is/image/CalvinKlein/64202232_110_main?wid=428&hei=569&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
        product_price: 19.99,
        product_rate: 4.2,
      },
      {
        product_name: "Cotton black",
        product_description: "Ultra-Soft black cotton tshirt",
        product_category: "Tshirts",
        product_image: "https://calvinklein.scene7.com/is/image/CalvinKlein/64202232_001_main?wid=428&hei=569&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
        product_price: 12.99,
        product_rate: 4.1,
      },
      {
        product_name: "Long sleeves",
        product_description: "Extra Fine Merino Blend Crewneck Sweater",
        product_category: "Tshirts",
        product_image: "https://calvinklein.scene7.com/is/image/CalvinKlein/23211313_720_main?wid=428&hei=569&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
        product_price: 20.99,
        product_rate: 4.2,
      },
      {
        product_name: "Purple wool",
        product_description: "Wool Blend Mock Neck Sweater",
        product_category: "Tshirts",
        product_image: "https://calvinklein.scene7.com/is/image/CalvinKlein/23401367_020_main?wid=428&hei=569&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
        product_price: 25.99,
        product_rate: 3.9,
      },

    ],
  },

 
  {
    category_name:"Bags" ,
      products: [
        {
          product_name: "Leather Tote",
          product_description: "Spacious and durable tote bag made of premium leather, perfect for work or shopping.",
          product_category: "Bags",
          product_image: "https://img.freepik.com/free-photo/bag-hanging-from-furniture-item-indoors_23-2151073502.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 99.99,
          product_rate: 4.4,
        },
        {
          product_name: "Minimalist Backpack",
          product_description: "Sleek and lightweight backpack with multiple compartments, designed for daily use.",
          product_category: "Bags",
          product_image: "https://img.freepik.com/premium-photo/backpack-white-background_999766-1888.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 69.99,
          product_rate: 4.7,
        },
        {
          product_name: "Crossbody Bag",
          product_description: "Casual crossbody bag made of sturdy canvas with adjustable straps and zipper closure.",
          product_category: "Bags",
          product_image: "https://img.freepik.com/free-photo/view-women-s-purse-tiles-with-mediterranean-aesthetics_23-2150916719.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 97.99,
          product_rate: 3.2,
        },
        {
          product_name: "Designer Clutch",
          product_description: "Elegant clutch with a metallic finish and decorative embellishments, ideal for evening events",
          product_category: "Bags",
          product_image: "https://img.freepik.com/free-photo/antique-hand-bag-layout-with-place-text-jewellery-background-mockup-banner-fashion-accessories_460848-12613.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 63.99,
          product_rate: 4.5,
        },
        {
          product_name: "Roll-Top Travel Backpack",
          product_description: "Water-resistant roll-top backpack with ample storage, suitable for travel or outdoor activities.",
          product_category: "Bags",
          product_image: "https://img.freepik.com/free-photo/roadtrip-concept-with-backpack-flask_23-2149270128.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 59.99,
          product_rate: 4.7,
        },
        {
          product_name: "Convertible Shoulder Bag",
          product_description: "Versatile bag that can be converted from a shoulder bag to a crossbody, with a stylish design.",
          product_category: "Bags",
          product_image: "https://img.freepik.com/free-photo/beautiful-elegance-luxury-fashion-green-handbag_74190-4885.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 98.99,
          product_rate: 3.8,
        },
        {
          product_name: "Eco-Friendly Tot",
          product_description: "Reusable grocery tote made of recycled materials, durable and washable.",
          product_category: "Bags",
          product_image: "https://img.freepik.com/premium-psd/tote-bag-mockup_89887-471.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 74.99,
          product_rate: 3.5,
        },
        {
          product_name: "Wheeled Duffel Bag",
          product_description: "Spacious wheeled duffel bag with reinforced handles and compartments for organized packing.",
          product_category: "Bags",
          product_image: "https://img.freepik.com/premium-photo/handbag-isolated-white_192247-94.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 96.99,
          product_rate: 2.7,
        },
        {
          product_name: "Compact Sling Bag",
          product_description: "Ergonomic sling bag with a modern design, perfect for carrying essentials hands-free.",
          product_category: "Bags",
          product_image: "https://img.freepik.com/premium-photo/used-black-blue-fabric-camera-bag-isolated-white-background_636705-3842.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
          product_price: 85.79,
          product_rate: 3.1,
        },

      ],
    },

 
];
