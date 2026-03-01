export const MobileMenuButton = () => {
  return (
    <button
      type="button"
      aria-label="toggleSidebar"
      className="text-stone-950/30 font-normal items-center bg-transparent caret-transparent flex h-[60px] justify-center min-h-[auto] min-w-[auto] text-center w-[60px] md:min-h-0 md:min-w-0"
    >
      <span className="box-border caret-transparent flex flex-col h-5 justify-around min-h-[auto] min-w-[auto] w-5 md:min-h-0 md:min-w-0">
        <span className="bg-black box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] origin-[5px_50%] w-full md:min-h-0 md:min-w-0"></span>
        <span className="bg-black box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] origin-[1px_50%] w-full md:min-h-0 md:min-w-0"></span>
      </span>
    </button>
  );
};
