import { NavbarLogo } from "@/sections/MainNavbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/MainNavbar/components/DesktopMenu";

export const MainNavbar = () => {
  return (
    <div className="sticky items-center bg-white shadow-[rgba(35,31,32,0.3)_0px_1px_2px_0px] box-border caret-transparent hidden h-[60px] justify-center w-full z-[11] top-10 md:flex">
      <div className="items-center box-border caret-transparent flex justify-between max-w-full min-h-0 min-w-0 w-[1280px] px-4 md:min-h-[auto] md:min-w-[auto] md:w-screen md:px-20">
        <div className="items-center box-border caret-transparent gap-x-10 flex min-h-0 min-w-0 gap-y-10 md:min-h-[auto] md:min-w-[auto]">
          <NavbarLogo />
          <DesktopMenu />
        </div>
        <button
          aria-label="Search"
          className="text-red-600 text-[18.4px] items-center bg-transparent caret-transparent flex h-9 justify-center leading-[27.6px] min-h-0 min-w-0 w-9 p-0 rounded-[50%] md:min-h-[auto] md:min-w-[auto] hover:bg-zinc-100"
        >
          <img
            src="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-4.svg"
            alt="Icon"
            className="caret-transparent h-[18.4px]"
          />
        </button>
      </div>
    </div>
  );
};
