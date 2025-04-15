import coverblue from "../../../assets/cover-blue.png";
import coverblack from "../../../assets/cover-black.png";
import coveratletic from "../../assets/coveratletic.png";
import Cover0 from "../../assets/cover-0.png";  //si 5
import Cover1 from "../../assets/cover-1.png";
import Cover2 from "../../assets/cover-2.png"; //Si 7
import Cover3 from "../../assets/cover-3.png"; //si 8
import Cover5 from "../../assets/cover-5.png"; //Si 2
import Cover6 from "../../assets/cover-6.png"; //Si 3
import Cover7 from "../../assets/cover-7.png"; //si 4

export interface Product {
    img: string;
    title: string;
    inStock: boolean;
    price: string;
    isBestSelling?: boolean;
}

export const products: Product[] = [

    {
        img: coverblue,  
        title: "Classic monochrome Tees",
        inStock: true,
        price: "35.00",
        isBestSelling: false,
    },
    {
        img: Cover5,
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
        img: Cover0,  
        title: "Elegant Ebony Sweatshirts",
        inStock: true,
        price: "35.00",
        isBestSelling: false,
    },
    {
        img: coverblack,
        title: "Sleek and Cozy Black",
        inStock: true,
        price: "57.00",
        isBestSelling: false,
    },
    {
        img: Cover2,
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
        img: coveratletic,
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