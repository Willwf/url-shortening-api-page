import { useState } from "react";

export function CopyButton({ copyText }) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    await navigator.clipboard.writeText(text);
  }

  function handleCopyClick() {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <button
      className={`${
        isCopied ? "bg-dark-violet hover:bg-dark-violet" : "bg-cyan"
      } hover:bg-active-cyan py-3 px-10 rounded-md text-lg text-white font-bold`}
      type="submit"
      onClick={handleCopyClick}
      disabled={isCopied ? "disabled" : ""}
    >
      {isCopied ? "Copied!" : "Copy"}
    </button>
  );
}
