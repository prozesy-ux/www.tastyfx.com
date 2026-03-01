export const HeroContent = () => {
  return (
    <div className="items-stretch self-center box-border caret-transparent flex flex-col gap-y-5 mb-4 md:items-start">
      <div className="box-border caret-transparent overflow-hidden">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <h1 className="text-4xl font-normal box-border caret-transparent leading-[50.4px] uppercase font-tusker_grotesk_6500 md:text-[64px] md:leading-[89.6px]">
              FOREX TRADERS KNOW BEST
            </h1>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <p className="font-normal box-border caret-transparent mb-4">
            Voted #1 Overall Broker
            <sup className="relative text-xs box-border caret-transparent leading-[0px] -top-1.5">
              1
            </sup>
            by traders who know the difference between biggest and best.
          </p>
          <ul className="box-border caret-transparent mb-4 pl-8">
            <li className="font-normal box-border caret-transparent">
              Earn up to 8% APY on idle cash
            </li>
            <li className="font-normal box-border caret-transparent">
              Trade commission-free spreads from 0.6 pips
              <sup className="relative text-xs box-border caret-transparent leading-[0px] -top-1.5">
                2
              </sup>
            </li>
            <li className="font-normal box-border caret-transparent">
              Get up to 15% cashback on spread paid
            </li>
          </ul>
        </div>
      </div>
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] gap-y-6 mt-[19.2px] md:flex-row md:col-end-[span_2] md:col-start-[span_2] md:gap-y-4">
        <a
          href="https://www.ig.com/us/tastyfx/application-form#undefined"
          className="font-semibold items-center self-center bg-red-600 box-border caret-transparent flex justify-center text-center uppercase text-nowrap border border-red-600 px-6 py-3 rounded-[80px] border-solid md:self-auto hover:bg-red-800 hover:border-red-800"
        >
          Create live account
        </a>
        <a
          href="https://www.tastyfx.com/accounts/demo-account/"
          className="font-normal items-center self-center box-border caret-transparent gap-x-2 flex w-fit -mb-1 pb-1 border-t-white border-b-transparent border-x-white border-b md:self-auto hover:border-b-red-600"
        >
          Create demo account
          <div className="text-red-600 text-[10.4px] font-medium box-border caret-transparent leading-[10.4px] pl-1 pt-px font-fa_solid_900">
            
          </div>
        </a>
      </div>
    </div>
  );
};
