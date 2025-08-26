'use client'
import { Product } from "@/app/[locale]/api/products/products.protocol"
import { InputProductCard } from "@/components/InputProductCard"
import { TextLanguage } from "@/components/TextLanguage"
import { useState } from "react"

interface ActionCardProps {
  product: Product
}

export function ActionCard({ product }: ActionCardProps) {
  const [productToShoppingCart, setProductToShoppingCart] = useState({ ...product, quantity: 0 })

  function handleSetQuantity(quantity: number) {
    setProductToShoppingCart((prevState) => ({ ...prevState, quantity }))
  }

  function handleAddToShoppingCart() {
    console.log(productToShoppingCart)
  }
  return (
    <div className="flex flex-wrap gap-2 w-full justify-center mt-4">
      <InputProductCard onQuantityChange={handleSetQuantity}></InputProductCard>
      <button onClick={handleAddToShoppingCart} className="bg-purple-800 min-w-[150px] text-amber-100 text-sm font-bold h-[42px] px-6 rounded-lg uppercase tracking-wide hover:bg-purple-900 transition">
        <TextLanguage i18nKey="General.AddCart"></TextLanguage>
      </button>
    </div>
  )
}
