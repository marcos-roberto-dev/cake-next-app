import { MissCupcake } from "@/components/MissCupcake";
import { TheSimpleSweetLife } from "@/components/TheSimplesSweetLife";

export default function Home() {

  return (
    <>
      <MissCupcake></MissCupcake>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="block w-full h-[50px] sm:h-[150px]"
      >
        <rect width="100%" height="100%" className="fill-red-100" />
        <path className="fill-amber-100" fillOpacity="1" d="M0,128L21.8,149.3C43.6,171,87,213,131,240C174.5,267,218,277,262,240C305.5,203,349,117,393,85.3C436.4,53,480,75,524,90.7C567.3,107,611,117,655,128C698.2,139,742,149,785,133.3C829.1,117,873,75,916,90.7C960,107,1004,181,1047,224C1090.9,267,1135,277,1178,272C1221.8,267,1265,245,1309,202.7C1352.7,160,1396,96,1418,64L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
      </svg>
      <TheSimpleSweetLife></TheSimpleSweetLife>
    </>

  );
}
