import { MissCupcake } from "@/components/MissCupcake";
import { DividerWaveSection } from "@/components/Sections/DividerWaveSection";
import { TheSimpleSweetLife } from "@/components/TheSimplesSweetLife";
import { Metadata } from "next";
import Head from "next/head";

interface HomeLocaleProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata(
): Promise<Metadata> {
  return {
    title: `Miss Cupcake`,
    description: "Delicious cupcakes and sweet treats for every occasion.",
  };
}


export default function HomeLocale({ params }: HomeLocaleProps) {
  return (
    <>
      <Head>
        <title>Miss Cupcake - {params.locale}</title>
        <meta name="description" content="Delicious cupcakes and sweet treats for every occasion." />
      </Head>
      <MissCupcake></MissCupcake>
      <DividerWaveSection bgTop="fill-red-100" bgBottom="fill-amber-100"></DividerWaveSection>
      <TheSimpleSweetLife></TheSimpleSweetLife>
    </>

  );
}

