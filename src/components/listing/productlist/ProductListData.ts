import Cover0 from "../../../assets/cover-0.png";
import Cover1 from "../../../assets/cover-1.png";
import Cover2 from "../../../assets/cover-2.png";
import Cover3 from "../../../assets/cover-3.png";
import Cover4 from "../../../assets/cover-4.png";
import Cover5 from "../../../assets/cover-5.png";
import Cover6 from "../../../assets/cover-6.png";
import Cover7 from "../../../assets/cover-7.png";
import Cover8 from "../../../assets/cover-8.png";
import { Product } from "../../../store/products/interfaces/products.interface";

export const products: Product[] = [
  {
    img: Cover2,
    title: "Classic monochrome Tees",
    inStock: true,
    price: "35.00",
    isBestSelling: false,
    category: 'Perfume',
    color: 'blue-dark',
    size: 'XL',
    createdAt: "2023-04-01T12:00:00Z" // Fecha de creación
  },
  {
    img: Cover8,
    title: "Monochromatic Wardrobe",
    inStock: true,
    price: "27.00",
    isBestSelling: true,
    category: 'Shoe',
    color: 'blue',
    size: 'XXL',
    createdAt: "2023-03-15T12:00:00Z" // Fecha de creación
  },
  {
    img: Cover6,
    title: "Essential Neutrals",
    inStock: true,
    price: "22.00",
    isBestSelling: true,
    category: 'Handbag',
    color: 'blue',
    size: 'L',
    createdAt: "2023-03-05T12:00:00Z" // Fecha de creación
  },
  {
    img: Cover7,
    title: "UTRAANET Black",
    inStock: true,
    price: "43.00",
    isBestSelling: true,
    category: 'Handbag',
    color: 'blue-dark',
    size: 'L',
    createdAt: "2023-04-12T12:00:00Z" // Fecha de creación
  },
  {
    img: Cover6,
    title: "Elegant Ebony Sweatshirts",
    inStock: true,
    price: "35.00",
    isBestSelling: false,
    category: 'Perfume',
    color: 'green',
    size: 'M',
    createdAt: "2023-01-20T12:00:00Z" // Fecha de creación
  },
  {
    img: Cover0,
    title: "Sleek and Cozy Black",
    inStock: true,
    price: "57.00",
    isBestSelling: false,
    category: 'Trousers',
    color: 'green',
    size: 'M',
    createdAt: "2023-02-10T12:00:00Z" // Fecha de creación
  },
  {
    img: Cover4,
    title: "Raw Black Tees",
    inStock: true,
    price: "19.00",
    isBestSelling: false,
    category: 'Hat',
    color: 'yellow',
    size: 'S',
    createdAt: "2023-04-08T12:00:00Z" // Fecha de creación
  },
  {
    img: Cover3,
    title: "MOCKUP Black",
    inStock: true,
    price: "30.00",
    isBestSelling: false,
    category: 'Shoe',
    color: 'yellow',
    size: 'M',
    createdAt: "2023-03-25T12:00:00Z" // Fecha de creación
  },
  {
    img: Cover5,
    title: "Athletic Shirt",
    inStock: true,
    price: "35.00",
    isBestSelling: false,
    category: 'Thermos',
    color: 'blue',
    size: 'S',
    createdAt: "2023-04-02T12:00:00Z" // Fecha de creación
  },
  {
    img: Cover1,
    title: "Sleek and Cozy Black",
    inStock: true,
    price: "57.00",
    isBestSelling: false,
    category: 'Trousers',
    color: 'yellow',
    size: 'S',
    createdAt: "2023-03-30T12:00:00Z" // Fecha de creación
  }
];
