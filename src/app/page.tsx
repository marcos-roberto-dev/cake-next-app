'use client'
import { CustomSection } from "@/components/Sections/CustomSection";
import Image from "next/image";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import colors from "tailwindcss/colors";
export default function Home() {

  return (
    <>
      <CustomSection bg={colors.red[100]}>
        <MouseParallaxContainer
          containerStyle={{
            width: "100%",
        
          }}
          globalFactorX={0.3}
          globalFactorY={0.3}
          resetOnLeave
          className={'grid items-center gap-[48px] justify-center grid-cols-1  md:justify-start md:grid-cols-2 '}
        >
          <div>
            <div>
              <h2 className="text-7xl font-wendy">Miss <br/> cupcake</h2>
              <p className="text-lg font-lato mt-8">We are proud to offer cupcakes and cakes that are freshly baked within hours, if not minutes, for your enjoyment.</p>

            </div>
            <button className="cursor-pointer transition hover:opacity-80 uppercase mt-8 bg-purple-800 text-amber-100 py-2 px-4 rounded max-w-[206px] w-full h-[43px]">Shop now</button>
          </div>

          <div className="w-full  sm:p-[48px]">
            <div className={`flex justify-center sm:justify-end pr-0 sm:pr-[48px]`}>
              <MouseParallaxChild factorX={0.2} factorY={0.3}>
                <Image
                  style={{ top: 0, left: -100 }}
                  src={'/cupecake-heart.png'}
                  alt="Cupcake de morango com chocolate"
                  width={250}
                  height={30}
                />
              </MouseParallaxChild>

              <MouseParallaxChild factorX={0.2} factorY={0.1}>
                <Image
                  style={{ top: 10, left: 100 }}
                  src={'/cupecake-choco.png'}
                  alt="Cupcake de chocolate"
                  width={100}
                  height={30}
                />
              </MouseParallaxChild>

              <MouseParallaxChild factorX={0.2} factorY={0.5}>
                <Image
                  style={{ top: 120, left: 32 }}
                  src={'/cupecake-straw.png'}
                  alt="Cupcake de morango com chocolate branco"
                  width={400}
                  height={30}
                />
              </MouseParallaxChild>
            </div>
          </div>
        </MouseParallaxContainer>
      </CustomSection>
      


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"   preserveAspectRatio="none"   className="block w-full h-[50px] sm:h-[150px]"
  >
  <rect width="100%" height="100%" className="fill-red-100" />
  <path className="fill-amber-100" fillOpacity="1" d="M0,128L21.8,149.3C43.6,171,87,213,131,240C174.5,267,218,277,262,240C305.5,203,349,117,393,85.3C436.4,53,480,75,524,90.7C567.3,107,611,117,655,128C698.2,139,742,149,785,133.3C829.1,117,873,75,916,90.7C960,107,1004,181,1047,224C1090.9,267,1135,277,1178,272C1221.8,267,1265,245,1309,202.7C1352.7,160,1396,96,1418,64L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
</svg>

      <CustomSection bg={colors.amber[100]}>
        <MouseParallaxContainer
          containerStyle={{
            width: "100%",
          }}
          resetOnLeave
     className={'grid items-center gap-[48px] justify-center grid-cols-1  md:justify-start md:grid-cols-2 '}
        >
          <div className="w-full p-0 sm:p-[48px]">
              <div className={`flex flex-col justify-center items-center sm:justify-end pr-0 sm:pr-[48px]`}>
              <MouseParallaxChild factorX={0.0} factorY={0.17} style={{zIndex: 3}}>
                <Image
                  style={{top: -40, left: 50, zIndex: 2 }}
                  src={'/choco-cake-top.png'}
                  alt="Cupcake de chocolate"
                  width={240}
                  height={30}
                />
              </MouseParallaxChild>

              <MouseParallaxChild  factorX={0.0} factorY={0.1} style={{zIndex: 1}}>
                <Image
                  style={{top: 80, left: 50 }}
                src={'/choco-cake-body.png'}
                  alt="Cupcake de morango com chocolate branco"
                  width={253}
                  height={396}
                />
              </MouseParallaxChild>

              </div>
          </div>

          <div>
            <div>
            <h2 className="text-7xl font-wendy">The Simple,<br/>Sweet Life</h2>
            <p className="text-lg font-lato mt-8">Our cupcakes are always made with the finest ingredients, creating a spark that makes your taste buds dance. You’ll want to indulge in each and every decadent flavor.</p>
            </div>
            <button className=" cursor-pointer transition hover:opacity-80 uppercase mt-8 bg-purple-800 text-amber-100  py-2 px-4 rounded max-w-[206px] w-full h-[43px]">Shop now</button>
          </div>
        </MouseParallaxContainer>
      </CustomSection>
    </>

  );
}
