import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className=" text-4xl font-wendy" >Cupcake com Wendy One</h1>
      <p className=" text-lg font-lato">Texto com Lato</p>
      <Image src={'/cupecake-choco.png'} alt="Cupcake de chocolate" width={100} height={30} />
    </div>
  );
}
