import Link from "next/link";

export const metadata = {
    title: "love letter to kev",
    description: "from zal",
  };

export default function Home() {
  return (
    <div className="h-screen bg-[#f5f5f4] flex flex-col gap-6 justify-center items-center">
      <div>
          <p className="text-[#773d11] text-3xl font-black">love letter to kev</p>
      </div>

      <div className="relative w-[500px] h-auto">
        <img src="/images/paper.png" alt="Paper" className="w-full h-auto" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center w-[60%] text-center text-[#773d11] text-base flex flex-col pt-6">
            <p>{"hi love <3"}</p>
            <p>{"i hope you know just how much i love you and i hope you feel it too. i'm the luckiest girl to be the one who gets to love you like this and i really do want to love you better and better everyday. i wasn't really sure what peace felt like before but now i think it may feel a lot like you. happy valentines my love. i love you so much."}</p>
            <p>{"xoxo zal"}</p>
        </div>
      </div>

        <div className="pt-4 text-[#773d11] text-xs italic">
            <Link href={"/valentinerary"}>back to valentinerary</Link>
        </div>
    </div>
  );
}