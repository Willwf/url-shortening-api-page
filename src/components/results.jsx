import { useEffect } from "react";
import { CopyButton } from "./copybutton";

export function Results({ newLink }) {
  const localLinks = { ...localStorage };

  const linkKeys = Object.keys(localLinks);

  useEffect(() => {}, [newLink]);

  return (
    <ul className="mt-28">
      {linkKeys.map((originalLink) => {
        return (
          <li
            key={originalLink}
            className="w-[85vw] mb-5 p-5 rounded-lg bg-white text-left font-bold text-sm
                       lg:w-[80vw]
            "
          >
            <div
              className="flex flex-col w-[100%] gap-4
                         lg:flex-row lg:items-center lg:gap-0
            "
            >
              <p
                className="text-dark-violet truncate text-base
                           lg:w-[55vw]
              "
              >
                {originalLink}
              </p>
              <span
                className="h-[1px] w-full bg-very-dark-blue
                           lg:opacity-0
              "
              ></span>
              <p
                className="text-cyan truncate text-base
                           lg:mr-4 lg:w-[20vw] lg:overflow-visible 
              "
              >
                {localLinks[originalLink]}
              </p>
              <CopyButton copyText={localLinks[originalLink]} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
