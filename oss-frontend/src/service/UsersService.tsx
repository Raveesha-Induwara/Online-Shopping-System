type OrderSummary = {
  products: string[]; // Array of product IDs
  totalPrice: number; // Total price of the order
};

type User = {
  userId: string;
  username: string;
  orderSummary: OrderSummary;
  mobile: string;
  email: string;
  address: string;
};

const usersData: User[] = [
  {
    userId: "001",
    username: "Alex Martin",
    orderSummary: {
      products: ["P001", "P005", "P010"],
      totalPrice: 150.0,
    },
    mobile: "07xxxxxxx",
    email: "abc@gmail.com",
    address: "No. 66, xxxxxxxxx",
  },
  {
    userId: "002",
    username: "John",
    orderSummary: {
      products: ["P002", "P003"],
      totalPrice: 75.5,
    },
    mobile: "07xxxxxxx",
    email: "john@gmail.com",
    address: "No. 24, xxxxxxxxx",
  },
];

const UsersService = {
  getUsers: (): Promise<User[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(usersData), 500); // Simulate network delay
    });
  },
  deleteUser: (userId: string): Promise<User[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const remainingUsers = usersData.filter(
          (user) => user.userId !== userId
        );
        resolve(remainingUsers);
      }, 500); // Simulate network delay
    });
  },
};

export default UsersService;
