import { BestSellingProductList } from "../components/products/BestSellingProductList"


export const HomePage = () => {
  return (
    <div>
      <BestSellingProductList />
      <BestSellingProductList type="showcase"/>
    </div>
  )
}
