import { ImageParallax } from "./Sections/ImageParallax";
import { SectionContainerParallax } from "./Sections/SectionContainerParallax";
import colors from "tailwindcss/colors";
import { TextLanguage } from "./TextLanguage";

export function MissCupcake() {
  return (
    <SectionContainerParallax bg={colors.red[100]}>
      <div>
        <div>
          <TextLanguage i18nKey="MissCupcakeSection.title" tag={'h2'}  className="text-7xl font-wendy"></TextLanguage>
          <TextLanguage i18nKey="MissCupcakeSection.description" tag={'p'}  className="text-lg font-lato mt-8"></TextLanguage>
        </div>
        <button className="cursor-pointer transition hover:opacity-80 uppercase mt-8 bg-purple-800 text-amber-100 py-2 px-4 rounded max-w-[206px] w-full h-[43px]">
          <TextLanguage i18nKey="General.CTA"></TextLanguage>
        </button>
      </div>

      <div className="w-full  sm:p-[48px]">
        <div className={`flex justify-center sm:justify-end pr-0 sm:pr-[48px]`}>
          <ImageParallax
            style={{ top: 0, left: -100 }}
            src={'/cupecake-heart.png'}
            alt="Cupcake de morango com chocolate"
            width={250}
            height={30}
            parallaxOptions={{ factorX: 0.2, factorY: 0.4 }}
          />

          <ImageParallax
            style={{ top: 10, left: 100 }}
            src={'/cupecake-choco.png'}
            alt="Cupcake de chocolate"
            width={100}
            height={30}
            parallaxOptions={{ factorX: 0.2, factorY: 0.1 }}
          />

          <ImageParallax
            style={{ top: 120, left: 32 }}
            src={'/cupecake-straw.png'}
            alt="Cupcake de morango com chocolate branco"
            width={400}
            height={30}
            parallaxOptions={{ factorX: 0.1, factorY: 0.3 }}
          />

        </div>
      </div>
    </SectionContainerParallax>
  );
}
