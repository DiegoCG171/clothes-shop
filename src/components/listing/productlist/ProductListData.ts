import Cover0 from "../../../assets/cover-0.png";
import Cover1 from "../../../assets/cover-1.png";
import Cover2 from"../../../assets/cover-2.png";
import Cover3 from "../../../assets/cover-3.png";
import Cover4 from "../../../assets/cover-4.png";
import Cover5 from "../../../assets/cover-5.png";
import Cover6 from "../../../assets/cover-6.png";
import Cover7 from "../../../assets/cover-7.png";
import Cover8 from "../../../assets/cover-8.png"

export interface Product {
    img: string;
    title: string;
    inStock: boolean;
    price: string;
    isBestSelling?: boolean;
}

export const products: Product[] = [

    {
        img: Cover2,  
        title: "Classic monochrome Tees",
        inStock: true,
        price: "35.00",
        isBestSelling: false,
    },
    {
        img: Cover8,
        title: "Monochromatic Wardrobe",
        inStock: true,
        price: "27.00",
        isBestSelling: true,
    },
    {
        img: Cover6,
        title: "Essential Neutrals",
        inStock: true,
        price: "22.00",
        isBestSelling: true,
    },
    {
        img: Cover7,
        title: "UTRAANET Black",
        inStock: true,
        price: "43.00",
        isBestSelling: true,
    },
    {
        img: Cover6,  
        title: "Elegant Ebony Sweatshirts",
        inStock: true,
        price: "35.00",
        isBestSelling: false,
    },
    {
        img: Cover0,
        title: "Sleek and Cozy Black",
        inStock: true,
        price: "57.00",
        isBestSelling: false,
    },
    {
        img: Cover4,
        title: "Raw Black Tees",
        inStock: true,
        price: "19.00",
        isBestSelling: false,
    },
    {
        img: Cover3,
        title: "MOCKUP Black",
        inStock: true,
        price: "30.00",
        isBestSelling: false,
    },
    {
        img: Cover5,
        title: "Athletc Shirt",
        inStock: true,
        price: "35.00",
        isBestSelling: false,
    },
    {
        img: Cover1,
        title: "Sleek and Cozy Black",
        inStock: true,
        price: "57.00",
        isBestSelling: false,
      },



];