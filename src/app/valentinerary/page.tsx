import Link from "next/link";

export const metadata = {
    title: "valentinerary | love letter to kev",
    description: "from zal",
  };

export default function Home() {
  return (
    <div className="h-screen bg-[#f5f5f4] flex flex-col gap-6 justify-center items-center">
      <div>
          <p className="text-[#773d11] text-3xl font-black">Valentinerary</p>
      </div>

      <div className="relative w-[500px] h-auto">
        <img src="/images/paper.png" alt="Paper" className="w-full h-auto" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[80%] text-center text-[#773d11] text-2xl space-y-2 gap-4">
          <Link href={"/letter"} className="transition-transform duration-300 hover:scale-105">Love Letter</Link>
          <Link href={"/dinner"}  className="transition-transform duration-300 hover:scale-105">Shared Dinner</Link>
          <Link href={"/movie"}  className="transition-transform duration-300 hover:scale-105">Movie Ladder</Link>
          <Link href={"/eepy"}  className="transition-transform duration-300 hover:scale-105">Eepy Together</Link>
        </div>
      </div>
    </div>
  );
}
