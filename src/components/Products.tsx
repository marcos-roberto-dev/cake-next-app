import { Product } from "@/app/[locale]/api/products/products.protocol";
import colors from "tailwindcss/colors";
import { CustomSection } from "./Sections/CustomSection";
import { ProductCard } from "./ProductCard/ProductCard";
import { TextLanguage } from "./TextLanguage";

interface ProductsProps {
  products: Product[]
}
export function Products({ products }: ProductsProps) {
  return (
    <CustomSection bg={colors.lime[50]}>
      <TextLanguage i18nKey="Products.title" tag={'h2'}  className="text-7xl font-wendy md:mb-[202px]"></TextLanguage>

      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 gap-[45px] mx-auto max-w-6xl">
        {
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>

    </CustomSection>
  )
}
