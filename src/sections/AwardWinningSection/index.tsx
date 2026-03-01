export const AwardWinningSection = () => {
  return (
    <div className="relative box-border caret-transparent max-w-screen-xl z-[9] mx-auto pt-8 px-4 md:px-20">
      <div className="box-border caret-transparent">
        <h2 className="text-[32px] font-medium box-border caret-transparent leading-[38.4px] uppercase mb-2 font-tusker_grotesk_6500 md:text-5xl md:leading-[57.6px]">
          Award-winning platform
        </h2>
      </div>
      <div className="items-start box-border caret-transparent gap-x-4 flex flex-col gap-y-4 mb-8 md:items-center md:flex-row">
        <div className="box-border caret-transparent w-fit md:w-auto">
          <p className="font-medium box-border caret-transparent">
            We’re excited to announce ForexBrokers.com has chosen us as a #1 US
            forex broker.
            <sup className="relative text-xs box-border caret-transparent leading-[0px] -top-1.5">
              1
            </sup>
          </p>
        </div>
      </div>
    </div>
  );
};
