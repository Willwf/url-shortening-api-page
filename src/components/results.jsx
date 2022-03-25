export function Results() {
  const results = [
    {
      id: 1,
      originalLink: "https://www.frontendmentor.io",
      newLink: "https://rel.ink/k4lKyk",
    },
    {
      id: 2,
      originalLink: "https://www.twitter.com/frontendmentor.io",
      newLink: "https://rel.ink/k4f6yk",
    },
    {
      id: 3,
      originalLink: "https://www.linkedin/vagas/frontendmentor.io",
      newLink: "https://rel.ink/k42hyk",
    },
  ];

  return (
    <ul className="mt-28">
      {results.map((result) => {
        return (
          <li
            key={result.id}
            className="w-[85vw] mb-5 p-5 rounded-lg bg-white text-left font-bold text-sm"
          >
            <div className="flex flex-col w-[100%] gap-4">
              <p className="text-dark-violet truncate">{result.originalLink}</p>
              <span className="h-[1px] w-full bg-very-dark-blue"></span>
              <p className="text-cyan truncate">{result.newLink}</p>
              <button
                className="bg-cyan py-3 px-10 rounded-md text-lg text-white font-bold"
                type="submit"
              >
                Copy
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
