import Link from "next/link";

export const metadata = {
    title: "shared dinner | love letter to kev",
    description: "from zal",
  };

export default function Home() {
  return (
    <div className="h-screen bg-[#f5f5f4] flex flex-col justify-center">
        <div className="flex flex-col gap-6 justify-center items-center">
            <div className="flex flex-col items-center">
                <p className="text-[#773d11] text-xl font-bold">{"ok we can't actually have pita kabob grill but"}</p>
                <p className="text-[#773d11] text-xl font-bold">{"we can figure something out"}</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                    <div className="w-[50px] h-auto">
                        <img src="/images/shawarma2.png" alt="shawarma" className="w-full h-full" />
                    </div>
                    
                    <div className="flex flex-col text-[#773d11] justify-center">
                        <p>him</p>
                        <p>{"pickup @ tanoor, 7:30pm"}</p>
                    </div>
                </div>

                <div className="flex flex-row-reverse gap-4">
                    <div className="w-[70px] h-auto">
                        <img src="/images/shawarma1.png" alt="shawarma" className="w-full h-full" />
                    </div>                
                    <div className="flex flex-col text-[#773d11] justify-center">
                        <p>her</p>
                        <p>{"delivery from al sabe'e, 1:30pm"}</p>
                    </div>
                </div>
            </div>

            <div className="pt-8 text-[#773d11] text-xs italic">
                <Link href={"/valentinerary"}>back to valentinerary</Link>
            </div>
        </div>
    </div>
  );
}
