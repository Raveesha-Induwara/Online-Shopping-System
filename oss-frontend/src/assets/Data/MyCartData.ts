function createData(
  id: number,
  product: string,
  name: string,
  description: string,
  price: number,
  quantity: number
) {
  return { id, product, name, description, price, quantity };
}

export const CartItems = [
  createData(
    1,
    "../../src/assets/Images/maxi3.jpg",
    "Slate Maxi - Gown",
    "Slate Maxi - Gown",
    6000,
    1
  ),
  createData(
    2,
    "../../src/assets/Images/maxi2.jpg",
    "Slate Maxi - Gown2",
    "Slate Maxi - Gown2",
    5000,
    3
  ),
  createData(
    3,
    "../../src/assets/Images/maxi1.jpg",
    "Slate Maxi - Gown3",
    "Slate Maxi - Gown3",
    7000,
    5
  ),
];
