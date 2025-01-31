function createData(
  id: number,
  product: string,
  name: string,
  description: string,
  price: number,
  quantity: number,
  status: string,
  orderDate: string
) {
  return { id, product, name, description, price, quantity, status, orderDate };
}

export const MyOrdersData = [
  createData(
    1,
    "../../src/assets/Images/maxi3.jpg",
    "Slate Maxi - Gown",
    "Slate Maxi - Gown",
    6000,
    1,
    "Delivered",
    "25/11/2024"
  ),
  createData(
    2,
    "../../src/assets/Images/maxi2.jpg",
    "Slate Maxi - Gown2",
    "Slate Maxi - Gown2",
    5000,
    3,
    "Dispatched",
    "22/11/2024"
  ),
  createData(
    3,
    "../../src/assets/Images/maxi1.jpg",
    "Slate Maxi - Gown3",
    "Slate Maxi - Gown3",
    7000,
    5,
    "Delivered",
    "20/11/2024"
  ),
];
