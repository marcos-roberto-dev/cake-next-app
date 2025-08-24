import { MissCupcake } from "@/components/MissCupcake";
import { Products } from "@/components/Products";
import { DividerWaveSection } from "@/components/Sections/DividerWaveSection";
import { TheSimpleSweetLife } from "@/components/TheSimplesSweetLife";
import { Metadata } from "next";
import { Product } from "./api/products/products.protocol";

interface HomeLocaleProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata(
): Promise<Metadata> {
  
  return {
    title: `Miss Cupcake`,
    description: "Delicious cupcakes and sweet treats for every occasion.",
  };
}

async function getProducts(locale: string = 'pt-br'): Promise<Product[]> {
  const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
  const responseData = await (await fetch(`${baseUrl}/${locale}/api/products`, { cache: "no-store" })).json();
  return responseData;
}

export default async function HomeLocale({ params }: HomeLocaleProps) {
  const resolvedParams = await params;
  const products = await getProducts(resolvedParams.locale);

  return (
    <>
      <MissCupcake></MissCupcake>
      <DividerWaveSection bgTop="fill-red-100" bgBottom="fill-amber-100" ></DividerWaveSection>
      <TheSimpleSweetLife></TheSimpleSweetLife>
      <DividerWaveSection bgTop="fill-amber-100" bgBottom="fill-lime-50" variant="smooth" ></DividerWaveSection>
      <Products products={products}></Products>
    </>
  );
}

