import { useState } from "react";
import logo from "../assets/logo.svg";

export function Header() {
  const [currentState, setCurrentState] = useState(true);

  function toggleClass() {
    setCurrentState(!currentState);
  }

  return (
    <header className="sans flex relative justify-between items-center max-w-[85vw] mx-auto h-28">
      <img src={logo} alt="Shortly Logo" className="h-10" />
      <button
        type="button"
        className="cursor-pointer active:opacity-70 space-y-1.5 lg:hidden"
        onClick={toggleClass}
      >
        <div className="w-8 h-1 bg-gray-400"></div>
        <div className="w-8 h-1 bg-gray-400"></div>
        <div className="w-8 h-1 bg-gray-400"></div>
      </button>
      <div
        className={`${
          currentState ? "hidden" : ""
        } flex flex-col justify-between items-center absolute top-28 w-full bg-dark-violet rounded-xl text-white text-xl`}
      >
        <a href="#" className="cursor-pointer mt-8 hover:opacity-70">
          Features
        </a>
        <a href="#" className="cursor-pointer my-8 hover:opacity-70">
          Pricing
        </a>
        <a href="#" className="cursor-pointer hover:opacity-70">
          Resources
        </a>
        <div className="cursor-pointer my-8 w-5/6 h-px bg-light-gray"></div>
        <a href="#" className="cursor-pointer hover:opacity-70">
          Login
        </a>
        <a
          href="#"
          className="my-8 py-2 cursor-pointer bg-cyan hover:opacity-70 w-5/6 text-center rounded-full"
        >
          Sign Up
        </a>
      </div>
    </header>
  );
}
