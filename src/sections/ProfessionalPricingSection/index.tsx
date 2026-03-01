import { PricingStats } from "@/sections/ProfessionalPricingSection/components/PricingStats";

export const ProfessionalPricingSection = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] max-w-screen-xl gap-y-8 z-[9] mx-auto px-4 py-12 md:px-20 md:py-32">
      <div className="items-stretch box-border caret-transparent gap-x-5 flex flex-col col-end-[span_2] col-start-[span_2] row-end-[span_1] row-start-[span_1] justify-start gap-y-5 text-center z-10 mb-4 md:items-start md:col-end-[span_1] md:col-start-[span_1] md:justify-normal md:text-start">
        <div className="items-center box-border caret-transparent flex flex-col justify-start text-center md:[align-items:normal] md:text-start">
          <div className="box-border caret-transparent text-center md:text-start">
            <h2 className="text-[32px] font-medium box-border caret-transparent leading-[51.2px] text-center uppercase font-tusker_grotesk_6500 md:text-5xl md:leading-[76.8px] md:text-start">
              PROFESSIONAL PRICING. ZERO COMPROMISE.
            </h2>
          </div>
        </div>
        <div className="[align-items:normal] self-auto box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 text-center md:items-start md:self-start md:text-start">
          <div className="text-[18.4px] box-border caret-transparent leading-[27.6px] text-center md:text-xl md:leading-[30px] md:text-start">
            <div className="text-[18.4px] box-border caret-transparent leading-[27.6px] text-center md:text-xl md:leading-[30px] md:text-start">
              <p className="text-[18.4px] font-medium box-border caret-transparent leading-[27.6px] text-center mb-4 md:text-xl md:leading-[30px] md:text-start">
                Trade commission-free from 0.6 pips,
                <sup className="relative text-[13.8px] box-border caret-transparent leading-[0px] text-center top-[-6.9px] md:text-[15px] md:text-start md:top-[-7.5px]">
                  2
                </sup>
                or access spreads from 0.0 pips.
                <sup className="relative text-[13.8px] box-border caret-transparent leading-[0px] text-center top-[-6.9px] md:text-[15px] md:text-start md:top-[-7.5px]">
                  2
                </sup>
                Unscripted support 24/5. And value for all clients, regardless
                of account size.
              </p>
            </div>
          </div>
          <div className="items-center box-border caret-transparent gap-x-6 flex flex-col gap-y-6 text-center md:gap-x-4 md:flex-row md:gap-y-4 md:text-start">
            <a
              href="https://www.tastyfx.com/why-tastyfx/"
              className="text-white font-semibold items-center self-center bg-red-600 box-border caret-transparent flex justify-center text-center uppercase text-nowrap border border-red-600 px-6 py-3 rounded-[80px] border-solid md:self-auto hover:bg-red-800 hover:border-red-800"
            >
              WHY CHOOSE TASTYFX
            </a>
          </div>
          <div className="text-xs box-border caret-transparent leading-[18px] text-center md:text-start">
            <div className="box-border caret-transparent text-center md:text-start">
              <p className="font-medium box-border caret-transparent text-center mb-4 md:text-start">
                Pricing varies by account type and represents{" "}
                <a
                  href="https://www.tastyfx.com/accounts/standard/"
                  className="text-black box-border caret-transparent text-center underline md:text-start hover:text-red-600 hover:border-red-600"
                >
                  Standard
                </a>
                ,{" "}
                <a
                  href="https://www.tastyfx.com/accounts/zero/"
                  className="text-black box-border caret-transparent text-center underline md:text-start hover:text-red-600 hover:border-red-600"
                >
                  Zero+
                </a>
                , and{" "}
                <a
                  href="https://www.tastyfx.com/accounts/prime/"
                  className="text-black box-border caret-transparent text-center underline md:text-start hover:text-red-600 hover:border-red-600"
                >
                  Prime
                </a>
                account features. See individual account pages for complete
                pricing details and terms.
              </p>
            </div>
          </div>
        </div>
      </div>
      <PricingStats />
    </div>
  );
};
