import { MobileMenuButton } from "@/sections/MobileNavbar/components/MobileMenuButton";
import { MobileLogo } from "@/sections/MobileNavbar/components/MobileLogo";
import { MobileActions } from "@/sections/MobileNavbar/components/MobileActions";

export const MobileNavbar = () => {
  return (
    <div className="sticky items-center bg-white shadow-[rgba(35,31,32,0.3)_0px_1px_2px_0px] box-border caret-transparent gap-x-10 flex h-[60px] justify-between gap-y-10 w-full z-[1000] pr-4 top-0 md:hidden">
      <div className="items-center box-border caret-transparent gap-x-4 flex justify-start min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-10 md:min-h-0 md:min-w-0 md:gap-y-10">
        <MobileMenuButton />
        <MobileLogo />
      </div>
      <MobileActions />
    </div>
  );
};
