import Link from "next/link";

export const metadata = {
    title: "shared dinner | love letter to kev",
    description: "from zal",
  };

export default function Home() {
  return (
    <div className="h-screen bg-[#f5f5f4] flex flex-col gap-6 justify-center items-center">
        <div className="flex flex-col items-center">
            <p className="text-[#773d11] text-xl font-bold">{"take 'em back to the bridge"}</p>
            <p className="text-[#773d11] text-xl font-bold">{"(pita kabob grill)"}</p>
        </div>
        <div className="w-[200px] h-auto">
            <Link href={"/dinner/details"}> 
                <img src="/images/pita-kabob.png" alt="pita kabob grill" className="w-full h-full transition-transform duration-300 hover:scale-105" />
            </Link>
        </div>
        
    </div>
  );
}
