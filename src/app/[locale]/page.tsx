import { MissCupcake } from "@/components/MissCupcake";
import { DividerWaveSection } from "@/components/Sections/DividerWaveSection";
import { TheSimpleSweetLife } from "@/components/TheSimplesSweetLife";

interface HomeLocaleProps {
  params: {
    locale: string;
  };
}

export default function HomeLocale({ params }: HomeLocaleProps) {
  return (
    <>
      <MissCupcake></MissCupcake>
      <DividerWaveSection bgTop="fill-red-100" bgBottom="fill-amber-100"></DividerWaveSection>
      <TheSimpleSweetLife></TheSimpleSweetLife>
    </>

  );
}
