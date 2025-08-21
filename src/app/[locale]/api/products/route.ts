import { NextResponse } from "next/server";
import { productsListMock } from "./mocks/products-list";

export const revalidate = 0;             // sem cache (dev)
export const dynamic = "force-dynamic";  // evita cache agressivo

export async function GET() {
  return NextResponse.json(productsListMock);
}