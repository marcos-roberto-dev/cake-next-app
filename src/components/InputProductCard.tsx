'use client'

import { useEffect, useState } from "react";

interface InputProductCardProps {
  onQuantityChange: (quantity: number) => void;
}

export function InputProductCard({ onQuantityChange }: InputProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  function handleSetQuantity(e: React.ChangeEvent<HTMLInputElement>) {
      const value = Number(e.target.value);
          if (value > 99) e.target.value = "99";
          if (value < 0) e.target.value = "1";
    setQuantity(value);
  }

  function handleAddQuantity(){
    setQuantity(prev => {
      if (prev < 99) return prev + 1;
      return prev;
    });
  }

  function handleRemoveQuantity(){
    setQuantity(prev => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  }

  useEffect(() => {
    onQuantityChange(quantity)
  }, [quantity])

  return <>
    <div className="flex items-center gap-2 border border-purple-800 rounded-lg">
      <button onClick={handleRemoveQuantity} className="cursor-pointer px-2 leading-none h-full  text-purple-800  flex items-center justify-center font-bold text-lg ">-</button>
      <input
        className="font-bold text-purple-800 text-lg w-10 h-8 text-center appearance-none"
        type="number"
        name=""
        id=""
        min={1}
        max={99}
        maxLength={2}
        style={{
          MozAppearance: 'textfield',
          appearance: 'textfield',
        }}
        value={quantity}
        onChange={handleSetQuantity}
      />
      <button onClick={handleAddQuantity} className="cursor-pointer px-2 leading-none h-full  text-purple-800  flex items-center justify-center font-bold text-lg ">+</button>
    </div>
  </>
}