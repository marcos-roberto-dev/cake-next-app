import { ImageParallax } from "./Sections/ImageParallax";
import { SectionContainerParallax } from "./Sections/SectionContainerParallax";
import colors from "tailwindcss/colors";

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
            height={396} parallaxOptions={{
              factorX: 0,
              factorY: 0.1
            }}></ImageParallax>
        </div>
      </div>

      <div>
        <div>
          <h2 className="text-7xl font-wendy">The Simple,<br />Sweet Life</h2>
          <p className="text-lg font-lato mt-8">Our cupcakes are always made with the finest ingredients, creating a spark that makes your taste buds dance. You’ll want to indulge in each and every decadent flavor.</p>
        </div>
        <button className=" cursor-pointer transition hover:opacity-80 uppercase mt-8 bg-purple-800 text-amber-100  py-2 px-4 rounded max-w-[206px] w-full h-[43px]">Shop now</button>
      </div>
    </SectionContainerParallax>
  );
}
