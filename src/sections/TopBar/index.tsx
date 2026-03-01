export const TopBar = () => {
  return (
    <div className="sticky items-center bg-stone-900 box-border caret-transparent hidden h-10 justify-center w-full z-[1000] top-0 md:flex">
      <div className="box-border caret-transparent max-w-full min-h-0 min-w-0 w-[1280px] px-4 md:min-h-[auto] md:min-w-[auto] md:w-screen md:px-20">
        <div className="items-center box-border caret-transparent flex justify-end">
          <nav className="items-center box-border caret-transparent gap-x-4 flex min-h-0 min-w-0 gap-y-4 md:min-h-[auto] md:min-w-[auto]">
            <a
              href="https://www.tastyfx.com/help-and-support/"
              className="text-white text-sm box-border caret-transparent block leading-[21px] min-h-0 min-w-0 px-4 py-[2.4px] rounded-[80px] md:min-h-[auto] md:min-w-[auto] hover:bg-zinc-800"
            >
              Help
            </a>
            <a
              href="https://www.ig.com/us/tastyfx/login"
              className="text-white text-sm box-border caret-transparent block leading-[21px] min-h-0 min-w-0 px-4 py-[2.4px] rounded-[80px] md:min-h-[auto] md:min-w-[auto] hover:bg-zinc-800"
            >
              Log in
            </a>
            <a
              href="https://www.ig.com/us/tastyfx/application-form#undefined"
              className="text-white text-[13px] font-semibold bg-red-600 box-border caret-transparent block leading-[19.5px] min-h-0 min-w-0 uppercase px-4 py-[2.4px] rounded-[80px] md:min-h-[auto] md:min-w-[auto] hover:bg-rose-700"
            >
              OPEN A LIVE ACCOUNT
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
