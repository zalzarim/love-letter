"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [displayPasswordField, setDisplayPasswordField] = useState<boolean>(false);
  const [disableButton, setDisableButton] = useState<boolean>(false);

  const handleClick = () => {
    setDisplayPasswordField(true);
    setDisableButton(true);
  };

  const [input, setInput] = useState("");
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (input.trim() === "DAWG") {
        router.push("/agenda");
      } else {
        setInput("");
      }
    }
  };

  return (
    <div className="h-screen bg-[#e3f1ff] flex flex-col gap-6 items-center justify-center">
      <div id="header">
        <p className="text-black text-2xl font-bold">You've got mail!</p>
      </div>

      <button 
        id="envelope" 
        className={`py-2 transition-transform duration-300 ${disableButton ? "" : "hover:scale-105"}`}      
        onClick={() => handleClick()}
        disabled={disableButton}
      >
        <img
          src="/images/envelope.png"
          alt="love letter"
        />
      </button>
      
      { displayPasswordField && (
        <div id="password-field" className="relative w-[300px] h-[80px]">
          <img
            src="/images/textfields-use.png"
            alt="text-field"
            className="w-full h-full"
          />

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="absolute inset-0 w-full h-full bg-transparent text-center text-black placeholder-grey focus:outline-none"
            placeholder="can i pet that ..."
          />
        </div>
      )}
    </div>
  );
}
