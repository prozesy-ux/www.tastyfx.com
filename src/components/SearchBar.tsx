export const SearchBar = () => {
  return (
    <div className="fixed items-center bg-white box-border caret-transparent flex h-0 justify-center w-full z-[1001] overflow-hidden pl-6 pr-4 top-0 md:z-[100] md:px-20 md:top-10">
      <div className="box-border caret-transparent max-w-full w-[1280px] md:w-screen">
        <form className="text-sm items-center box-border caret-transparent flex justify-between leading-[21px] w-full">
          <button
            aria-label="Search"
            type="submit"
            className="bg-transparent caret-transparent block p-0"
          >
            <img
              src="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-5.svg"
              alt="Icon"
              className="caret-transparent inline-block h-3.5"
            />
          </button>
          <input
            type="search"
            name="q"
            placeholder="Search tastyfx..."
            value=""
            className="text-neutral-600 text-base font-normal bg-zinc-100/30 box-border caret-transparent block leading-6 -outline-offset-2 w-full mx-4"
          />
          <button
            type="reset"
            aria-label="Reset"
            className="items-center bg-transparent caret-transparent flex h-9 justify-center w-9 p-0 rounded-[50%] hover:bg-zinc-100"
          >
            <img
              src="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-6.svg"
              alt="Icon"
              className="caret-transparent h-3.5"
            />
          </button>
        </form>
      </div>
    </div>
  );
};
