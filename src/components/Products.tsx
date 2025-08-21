import { Product } from "@/app/[locale]/api/products/products.protocol";
import colors from "tailwindcss/colors";
import { CustomSection } from "./Sections/CustomSection";
import Image from "next/image";

interface ProductsProps {
  products: Product[]
}
export function Products({ products }: ProductsProps) {
  console.log("Products", products);
  return (
    <CustomSection bg={colors.lime[50]}>
      <h2 className="text-7xl font-wendy md:mb-[202px]">Make your day<br />a little sweeter</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-[90px]">
        {
          products.map(product => (
            <div
              key={product.id}
              className="flex flex-col justify-between items-center h-[500px] p-6 mb-8 "
            >
              <Image src={product.image} alt={product.name} width={218} height={244} className="mb-4 rounded-xl" />
              <div className="w-full text-center mb-4 flex-1 flex flex-col justify-end">
                <h3 className="text-2xl font-wendy text-purple-800 mb-2">{product.name}</h3>
                <span className="text-lg font-bold text-purple-800">{product.price}</span>
                <p className="text-base font-lato text-purple-700">{product.description}</p>
              </div>
              <div className="w-full justify-center flex gap-4">
                <div className="flex items-center gap-2 border border-purple-800 rounded-lg">
                  <button className=" text-purple-800  w-8 h-8 flex items-center justify-center font-bold text-lg hover:bg-purple-200 transition">-</button>
                  <span className="font-bold text-purple-800 text-lg">0</span>
                  <button className=" text-purple-800  w-8 h-8 flex items-center justify-center font-bold text-lg hover:bg-purple-200 transition">+</button>
                </div>
                <button className="bg-purple-800 text-amber-100 text-sm font-bold h-[42px] px-6 rounded-lg uppercase tracking-wide hover:bg-purple-900 transition">Add to Cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </CustomSection>
  )
}