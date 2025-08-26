import { ImageParallax } from "./Sections/ImageParallax";
import { SectionContainerParallax } from "./Sections/SectionContainerParallax";
import colors from "tailwindcss/colors";
import { TextLanguage } from "./TextLanguage";

export function TheSimpleSweetLife() {
  return (
    <SectionContainerParallax bg={colors.amber[100]}>
      <div className="w-full p-0 sm:p-[48px]">
        <div className={`flex flex-col justify-center items-center sm:justify-end pr-0 sm:pr-[48px]`}>
          <ImageParallax
            style={{ top: -40, left: 50, zIndex: 2 }}
            src={'/choco-cake-top.png'}
            alt="Cupcake de chocolate"
            width={240}
            minWidth={240}
            minHeight={140}
            height={30}
            parallaxOptions={
              {
                factorX: 0,
                factorY: 0.17
              }
            }
          ></ImageParallax>
          <ImageParallax style={{ top: 80, left: 50 }}
            src={'/choco-cake-body.png'}
            alt="Cupcake de morango com chocolate branco"
            width={253}
            minWidth={253}
            minHeight={140}
            height={396} parallaxOptions={{
              factorX: 0,
              factorY: 0.1
            }}></ImageParallax>
        </div>
      </div>

      <div>
        <div>
          <TextLanguage i18nKey="TheSimpleSweetLife.title" tag={'h2'}  className="text-7xl font-wendy"></TextLanguage>
          <TextLanguage i18nKey="TheSimpleSweetLife.description" tag={'p'}  className="text-lg font-lato mt-8"></TextLanguage>
        </div>
        <button className=" cursor-pointer transition hover:opacity-80 uppercase mt-8 bg-purple-800 text-amber-100  py-2 px-4 rounded max-w-[206px] w-full h-[43px]">
          <TextLanguage i18nKey="General.CTA"></TextLanguage>
        </button>
      </div>
    </SectionContainerParallax>
  );
}
