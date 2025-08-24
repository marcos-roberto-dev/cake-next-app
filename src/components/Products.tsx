import { Product } from "@/app/[locale]/api/products/products.protocol";
import colors from "tailwindcss/colors";
import { CustomSection } from "./Sections/CustomSection";
import { ProductCard } from "./ProductCard/ProductCard";

interface ProductsProps {
  products: Product[]
}
export function Products({ products }: ProductsProps) {
  console.log("Products", products);
  return (
    <CustomSection bg={colors.lime[50]}>
      <h2 className="text-7xl font-wendy md:mb-[202px]">Make your day<br />a little sweeter</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  md:gap-[32px]">
        {
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </CustomSection>
  )
}