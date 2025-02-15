import Link from "next/link";

export const metadata = {
    title: "eepy together | love letter to kev",
    description: "from zal",
  };

export default function Home() {
  return (
    <div className="h-screen bg-[#0a003a] flex flex-col justify-center">
        <div className="flex flex-col gap-6 justify-center items-center">
            <div>
                <p className="text-white text-xl font-bold">{"time to eepy together<3"}</p>
            </div>

            <div className="w-[300px] h-auto">
                <img src="/images/eepy.png" alt="" className="w-full h-full"/>
            </div>

            <div className="pt-8 text-white text-xs italic">
                <Link href={"/valentinerary"}>back to valentinerary</Link>
            </div>
        </div>
    </div>
  );
}
