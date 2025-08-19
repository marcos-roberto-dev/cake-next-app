import { MissCupcake } from "@/components/MissCupcake";
import { DividerWaveSection } from "@/components/Sections/DividerWaveSection";
import { TheSimpleSweetLife } from "@/components/TheSimplesSweetLife";

export default function Home() {

  return (
    <>
      <MissCupcake></MissCupcake>
      <DividerWaveSection bgTop="fill-red-100" bgBottom="fill-amber-100"></DividerWaveSection>
      <TheSimpleSweetLife></TheSimpleSweetLife>
    </>

  );
}
