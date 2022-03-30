import { useState } from "react";
import logo from "../assets/logo.svg";

export function Header() {
  const [currentState, setCurrentState] = useState(true);

  function toggleClass() {
    setCurrentState(!currentState);
  }

  return (
    <header
      className="sans flex relative justify-between items-center max-w-[85vw] mx-auto h-28
    lg:max-w-[80vw]
    "
    >
      <img src={logo} alt="Shortly Logo" className="h-10" />
      <button
        type="button"
        className="cursor-pointer active:opacity-50 space-y-1.5 hover:opacity-70 lg:hidden"
        onClick={toggleClass}
      >
        <div className="w-8 h-1 bg-gray-400"></div>
        <div className="w-8 h-1 bg-gray-400"></div>
        <div className="w-8 h-1 bg-gray-400"></div>
      </button>
      <div
        className={`${
          currentState ? "hidden lg:flex" : ""
        } flex flex-col justify-between items-center absolute top-28 w-full bg-dark-violet rounded-xl text-white text-xl z-10
          lg:flex-row lg:static lg:bg-white lg:text-grayish-violet lg:justify-start lg:font-bold lg:text-base
        `}
      >
        <a
          href="#"
          className="cursor-pointer mt-8 hover:opacity-70
                     lg:mt-0 lg:ml-10 lg:hover:text-very-dark-violet
        "
        >
          Features
        </a>
        <a
          href="#"
          className="cursor-pointer my-8 hover:opacity-70
                     lg:m-0 lg:ml-10 lg:hover:text-very-dark-violet
        "
        >
          Pricing
        </a>
        <a
          href="#"
          className="cursor-pointer hover:opacity-70
                     lg:ml-10 lg:hover:text-very-dark-violet
        "
        >
          Resources
        </a>
        <div
          className="cursor-pointer my-8 w-5/6 h-px bg-light-gray
                     lg:opacity-0
        "
        ></div>
        <a
          href="#"
          className="cursor-pointer hover:opacity-70
                     lg:mr-10 lg:hover:text-very-dark-violet
        "
        >
          Login
        </a>
        <a
          href="#"
          className="my-8 py-2 cursor-pointer hover:bg-active-cyan bg-cyan w-5/6 text-center rounded-full
                     lg:text-white lg:max-w-[10vw] lg:justify-self-end
          "
        >
          Sign Up
        </a>
      </div>
    </header>
  );
}
