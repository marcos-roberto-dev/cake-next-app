import Image from "next/image";
import { ActionCard } from "./ActionCard/ActionCard";
import { Product } from "@/app/[locale]/api/products/products.protocol";

interface ProductCard {
  product: Product;
}

export function ProductCard({ product }: ProductCard) {
  return (
    <div
      className="flex flex-col justify-between items-center h-[500px] p-6 mb-8"
    >
      <Image src={product.image} alt={product.name} width={218} height={244} style={{ minWidth: 218, minHeight: 244 }} className="mb-4 rounded-xl" />
        <div className="w-full text-center mb-4 flex-1 flex flex-col justify-end">
          <h3 className="text-2xl font-wendy text-purple-800 mb-2">{product.name}</h3>
          <span className="text-lg font-bold text-purple-800">{product.price}</span>
          <p className="text-base font-lato text-purple-700">{product.description}</p>
        <ActionCard product={product} />
      </div>
    </div>
  )
}