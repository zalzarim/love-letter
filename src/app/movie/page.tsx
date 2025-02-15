import Link from "next/link";

export const metadata = {
    title: "movie ladder | love letter to kev",
    description: "from zal",
  };

export default function Home() {
  return (
    <div className="h-screen bg-[#f5f5f4] flex flex-col gap-4 items-center justify-center">
        <div>
            <p className="text-[#773d11] text-xl font-bold">chick flick time :D</p>
        </div>
        <div>
            <img src="/images/movie-ladder.png" alt="" />
        </div>
        <div className="flex gap-12 text-[#773d11] pr-4">
            <Link href={"https://freek.to/watch/movie/10096"} target="_blank" rel="noopener noreferrer" className="hover:underline">13 Going On 30</Link>
            <Link href={"https://freek.to/watch/movie/6557"} target="_blank" rel="noopener noreferrer" className="hover:underline">27 Dresses</Link>
            <Link href={"https://freek.to/watch/movie/10521"} target="_blank" rel="noopener noreferrer" className="hover:underline">Bride Wars</Link>
        </div>
        <div className="pt-8 text-[#773d11] text-xs italic">
            <Link href={"/valentinerary"}>back to valentinerary</Link>
        </div>
    </div>
  );
}
