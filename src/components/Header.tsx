export const Header = () => {
  return (
    <div className="h-15 bg-header border-b-1 border-headerborder flex items-center justify-between">
      <h1 className="ml-6 font-inria text-text-dark text-2xl ">
        Sylvia Suet Wai Yung
      </h1>
      <button type="button" className="font-inria text-lg text-text-dark border-1 rounded-2xl h-8 w-22 bg-button/50 shadow-lg ml-8">
        RESUME
      </button>
      <button
            // onClick={toggleMenu}
            type="button"
            className="items-center mr-4 h-10 justify-center rounded-lg md:hidden"
            // aria-expanded={isExpanded}
          >
            <svg
              className="h-5"
            //   aria-hidden="true"
            //   fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="#b66878"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
    </div>
  );
};
