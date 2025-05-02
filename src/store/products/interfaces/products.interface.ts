export interface Product {
    img: string;
    title: string;
    inStock: boolean;
    price: string;
    isBestSelling?: boolean;
    category: string;
    color: string;
    size: string;
    createdAt: string
}

export interface ProductsInitialState {
    products: Product[];
}