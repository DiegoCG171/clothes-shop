import { ProductList } from "../components/listing/productlist/ProductList"; // Ajusta la ruta si es diferente
import { products } from "../components/listing/productlist/ProductListData";

export const ProductListPage = () => {
  return (
    <>
    <h2>Todos los productos</h2>
    <ProductList products={products} />
  </>
  );
}
