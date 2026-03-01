export const MobileActions = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 flex min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-8 md:min-h-0 md:min-w-0 md:gap-y-8">
      <a
        aria-label="Mobile nav"
        href="https://www.tastyfx.com/help-and-support/"
        className="text-sm items-center box-border caret-transparent flex h-9 justify-center leading-[21px] min-h-[auto] min-w-[auto] underline w-9 rounded-[50%] md:min-h-0 md:min-w-0 hover:bg-zinc-100"
      >
        <img
          src="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-7.svg"
          alt="Icon"
          className="caret-transparent h-3.5"
        />
      </a>
      <a
        href="https://www.ig.com/us/tastyfx/login"
        aria-label="Mobile nav"
        className="text-sm items-center box-border caret-transparent flex h-9 justify-center leading-[21px] min-h-[auto] min-w-[auto] underline w-9 rounded-[50%] md:min-h-0 md:min-w-0 hover:bg-zinc-100"
      >
        <img
          src="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-8.svg"
          alt="Icon"
          className="caret-transparent h-3.5"
        />
      </a>
      <button
        aria-label="Search"
        className="text-red-600 text-[18.4px] items-center bg-transparent caret-transparent flex h-9 justify-center leading-[27.6px] min-h-[auto] min-w-[auto] w-9 p-0 rounded-[50%] md:min-h-0 md:min-w-0 hover:bg-zinc-100"
      >
        <img
          src="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-4.svg"
          alt="Icon"
          className="caret-transparent h-[18.4px]"
        />
      </button>
    </div>
  );
};
