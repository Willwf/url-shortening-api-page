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
        <div
          className="flex flex-col justify-center items-center
                        lg:grid lg:grid-cols-2 lg:grid-rows-6 lg:mb-40 lg:w-full lg:overflow-visible"
        >
          <div
            className="w-full overflow-hidden
                          lg:col-start-2 lg:row-start-1 lg:row-end-7"
          >
            <img
              className="object-cover object-left ml-[6vw] w-[90vw] h-[40vh]
                         lg:h-[70vh] lg:w-auto"
              src={illustrationWorking}
              alt="Illustration Working"
            />
          </div>
          <h1
            className="text-center text-4xl text-very-dark-violet font-bold mt-10
                         lg:mt-0 lg:col-start-1 lg:row-start-2 lg:row-end-4 lg:text-left lg:text-7xl lg:ml-[17vh]"
          >
            More than just shorter links
          </h1>
          <p
            className="text-center text-lg text-grayish-violet w-[90vw] my-5
                       lg:my-0 lg:w-auto lg:col-start-1 lg:row-start-4 lg:row-end-5 lg:text-left lg:text-2xl lg:ml-[17vh]"
          >
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button
            className="bg-cyan hover:bg-active-cyan py-4 px-10 rounded-full text-lg text-white font-bold mb-40
                       lg:mb-0 lg:col-start-1 lg:row-start-5 lg:row-end-6 lg:max-w-[14vw] lg:ml-[17vh]"
          >
            Get Started
          </button>
        </div>

        <div
          className="bg-dark-violet bg-shorten-mobile bg-no-repeat bg-right-top w-[85vw] p-5 rounded-lg absolute -bottom-20
                        lg:w-[80vw] lg:py-10 lg:px-16 lg:bg-shorten-desktop lg:bg-cover"
        >
          <form onSubmit={handleSubmit}>
            <div
              className="flex flex-col w-full
                            lg:flex-row lg:relative"
            >
              <input
                className={`py-3 px-3 rounded-md text-md focus:outline-none
                            lg:w-full
                ${
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
                <span
                  className="text-red text-xs mt-2 italic
                               lg:absolute lg:-bottom-6"
                >
                  {errorMessage}
                </span>
              ) : (
                ""
              )}
              <button
                className="bg-cyan hover:bg-active-cyan py-3 px-10 rounded-md text-lg text-white font-bold mt-4
                           lg:mt-0 lg:ml-[2vw] lg:w-[16vw]"
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
        <div
          className="pt-20 w-[90vw]
                     lg:w-[80vw] lg:flex lg:flex-col lg:justify-center lg:items-center"
        >
          <h1
            className="text-2xl text-very-dark-violet font-bold
                       lg:text-5xl"
          >
            Advanced Statistics
          </h1>
          <p
            className="text-grayish-violet mt-6
                       lg:text-xl lg:w-[40vw] lg:mb-4"
          >
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center
                     lg:w-[80vw]  lg:flex-row"
        >
          <div
            className="bg-white mt-28 w-[85vw] flex flex-col justify-center items-center relative
                       lg:w-[25vw] lg:mt-0 lg:items-start lg:pl-10"
          >
            <div className="w-24 h-24 rounded-full bg-dark-violet flex flex-col justify-center items-center  absolute -top-12">
              <img
                src={brandRecognitionIcon}
                alt="Brand Recognition Icon"
                className="w-10"
              />
            </div>
            <p
              className="text-xl text-very-dark-violet font-bold mt-20
                        lg:text-2xl"
            >
              Brank Recognition
            </p>
            <p
              className="text-grayish-violet mt-6 mb-10 w-[90%] 
                         lg:text-left"
            >
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content.
            </p>
          </div>
          <div
            className="w-2 h-28 bg-cyan
                      lg:w-8 lg:h-2"
          ></div>
          <div
            className="bg-white w-[85vw] flex flex-col justify-center items-center relative
                       lg:w-[25vw] lg:items-start lg:pl-10 lg:mt-[10vh]"
          >
            <div className="w-24 h-24 rounded-full bg-dark-violet flex flex-col justify-center items-center  absolute -top-12">
              <img
                src={detailedRecordsIcon}
                alt="Detailed Records"
                className="w-10"
              />
            </div>
            <p
              className="text-xl text-very-dark-violet font-bold mt-20
                        lg:text-2xl"
            >
              Detailed Records
            </p>
            <p
              className="text-grayish-violet mt-6 mb-10 w-[90%]
                         lg:text-left lg:w-[95%]"
            >
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div
            className="w-2 h-28 bg-cyan
                      lg:w-8 lg:h-2"
          ></div>
          <div
            className="bg-white w-[85vw] flex flex-col justify-center items-center relative
                       lg:w-[25vw] lg:items-start lg:pl-10 lg:mt-[20vh]
          "
          >
            <div className="w-24 h-24 rounded-full bg-dark-violet flex flex-col justify-center items-center  absolute -top-12">
              <img
                src={fullyCustomizableIcon}
                alt="Fully Customizable Icon"
                className="w-10"
              />
            </div>
            <p
              className="text-xl text-very-dark-violet font-bold mt-20
                        lg:text-2xl"
            >
              Fully Customizable
            </p>
            <p
              className="text-grayish-violet mt-6 mb-10 w-[90%]
                        lg:text-left"
            >
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
        <div
          className="mt-20 w-full h-80 flex flex-col justify-center items-center bg-dark-violet bg-boost-mobile bg-no-repeat bg-cover
                    lg:bg-boost-desktop lg:h-56"
        >
          <p
            className="text-2xl text-white font-bold
                      lg:text-4xl
          "
          >
            Boost your links today
          </p>
          <button className="bg-cyan hover:bg-active-cyan py-4 px-10 rounded-full text-lg text-white font-bold mt-4">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
