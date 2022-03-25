import illustrationWorking from "../assets/illustration-working.svg";
import brandRecognitionIcon from "../assets/icon-brand-recognition.svg";
import detailedRecordsIcon from "../assets/icon-detailed-records.svg";
import fullyCustomizableIcon from "../assets/icon-fully-customizable.svg";
import { Results } from "./results";

import { useState } from "react";

export function Main() {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [newLink, setNewLink] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (event.target[0].value) {
      fetch(`https://api.shrtco.de/v2/shorten?url=${event.target[0].value}`)
        .then((response) => {
          return response.json();
          // if (response.ok) {
          //   return response.json();
          // }

          // throw new Error();
        })
        .then((data) => {
          if (data.ok) {
            localStorage.clear();

            localStorage.setItem(
              data.result.original_link,
              data.result.full_short_link
            );
            setNewLink(!newLink);
            setInputValue("");
          } else {
            throw new Error(data.error);
          }
        })
        .catch((error) => {
          setErrorMessage(error.toString());
        });
    } else {
      setErrorMessage("Please add a link");
    }
  }

  function inputFormater(event) {
    setInputValue(event.target.value);
    setErrorMessage("");
  }

  return (
    <main className="sans">
      <section className="flex flex-col justify-center items-center relative">
        <div className="w-full overflow-hidden">
          <img
            className="object-cover object-left ml-[6vw] w-[90vw] h-[40vh]"
            src={illustrationWorking}
            alt="Illustration Working"
          />
        </div>
        <h1 className="text-center text-4xl text-very-dark-violet font-bold mt-10">
          More than just shorter links
        </h1>
        <p className="text-center text-lg text-grayish-violet w-[90vw] my-5">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-cyan py-4 px-10 rounded-full text-lg text-white font-bold mb-40">
          Get Started
        </button>

        <div className="bg-dark-violet bg-shorten-mobile bg-no-repeat bg-right-top w-[85vw] p-5 rounded-lg absolute -bottom-20">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-[100%]">
              <input
                className={`py-3 px-3 rounded-md text-md focus:outline-none ${
                  errorMessage
                    ? "border-red border-4 border-solid placeholder:text-red placeholder:text-opacity-50"
                    : ""
                }`}
                type="text"
                placeholder="Shorten a link here..."
                value={inputValue}
                onChange={inputFormater}
              />
              {errorMessage ? (
                <span className="text-red text-xs mt-2 italic">
                  {errorMessage}
                </span>
              ) : (
                ""
              )}
              <button
                className="bg-cyan py-3 px-10 rounded-md text-lg text-white font-bold mt-4"
                type="submit"
              >
                Shorten it!
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="bg-very-light-gray flex flex-col justify-center items-center text-center">
        <Results newLink={newLink} />
        <div className="pt-20 w-[90vw]">
          <h1 className="text-2xl text-very-dark-violet font-bold">
            Advanced Statistics
          </h1>
          <p className="text-grayish-violet mt-6">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white mt-28 w-[85vw] flex flex-col justify-center items-center relative">
            <div className="w-24 h-24 rounded-full bg-dark-violet flex flex-col justify-center items-center  absolute -top-12">
              <img
                src={brandRecognitionIcon}
                alt="Brand Recognition Icon"
                className="w-10"
              />
            </div>
            <p className="text-xl text-very-dark-violet font-bold mt-20">
              Brank Recognition
            </p>
            <p className="text-grayish-violet mt-6 mb-10 w-[90%]">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content.
            </p>
          </div>
          <div className="w-2 h-28 bg-cyan"></div>
          <div className="bg-white w-[85vw] flex flex-col justify-center items-center relative">
            <div className="w-24 h-24 rounded-full bg-dark-violet flex flex-col justify-center items-center  absolute -top-12">
              <img
                src={detailedRecordsIcon}
                alt="Detailed Records"
                className="w-10"
              />
            </div>
            <p className="text-xl text-very-dark-violet font-bold mt-20">
              Detailed Records
            </p>
            <p className="text-grayish-violet mt-6 mb-10 w-[90%]">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="w-2 h-28 bg-cyan"></div>
          <div className="bg-white w-[85vw] flex flex-col justify-center items-center relative">
            <div className="w-24 h-24 rounded-full bg-dark-violet flex flex-col justify-center items-center  absolute -top-12">
              <img
                src={fullyCustomizableIcon}
                alt="Fully Customizable Icon"
                className="w-10"
              />
            </div>
            <p className="text-xl text-very-dark-violet font-bold mt-20">
              Fully Customizable
            </p>
            <p className="text-grayish-violet mt-6 mb-10 w-[90%]">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
        <div className="mt-20 w-full h-80 flex flex-col justify-center items-center bg-dark-violet bg-boost-mobile bg-no-repeat bg-cover">
          <p className="text-2xl text-white font-bold">
            Boost your links today
          </p>
          <button className="bg-cyan py-4 px-10 rounded-full text-lg text-white font-bold mt-4">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
