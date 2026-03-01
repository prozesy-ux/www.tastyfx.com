export const BonusSection = () => {
  return (
    <div className="relative text-black items-center bg-[linear-gradient(0deg,rgba(202,202,202,0.75),rgb(255,255,255)_54%)] box-border caret-transparent flex flex-col justify-center pt-8">
      <div className="box-border caret-transparent w-full">
        <div className="relative box-border caret-transparent max-w-screen-xl z-[9] mx-auto px-4 md:px-20">
          <div className="box-border caret-transparent flex justify-around w-full">
            <div className="relative items-center box-border caret-transparent gap-x-4 flex flex-col max-w-[1040px] gap-y-4">
              <div className="items-center box-border caret-transparent flex flex-col text-center mb-4">
                <div className="box-border caret-transparent">
                  <div className="text-4xl font-medium box-border caret-transparent leading-[57.6px] uppercase font-tusker_grotesk_6500 md:text-[64px] md:leading-[102.4px]">
                    <h2 className="text-4xl box-border caret-transparent leading-[57.6px] mb-2 md:text-[64px] md:leading-[102.4px]">
                      EARN UP TO $10,000*
                    </h2>
                  </div>
                </div>
                <div className="text-base font-normal box-border caret-transparent leading-6 mt-2 md:text-xl md:leading-[30px]">
                  <div className="text-base box-border caret-transparent leading-6 md:text-xl md:leading-[30px]">
                    <p className="text-base box-border caret-transparent leading-6 md:text-xl md:leading-[30px]">
                      Fund and trade a new tastyfx account today for up to $10k
                      in bonuses.*
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://www.tastyfx.com/forex-trading-bonus/"
                className="text-white font-semibold items-center self-center bg-red-600 box-border caret-transparent flex justify-center text-center uppercase text-nowrap border border-red-600 px-6 py-3 rounded-[80px] border-solid md:self-auto hover:bg-red-800 hover:border-red-800"
              >
                Learn more
              </a>
              <span className="text-sm font-medium items-center box-border caret-transparent gap-x-2 flex leading-[21px] mb-12 hover:border-b-red-600 hover:border-b">
                <img
                  src="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-12.svg"
                  alt="Icon"
                  className="text-xs caret-transparent h-3 leading-[18px]"
                />
                Terms and Conditions
              </span>
            </div>
          </div>
          <img
            src="https://images.contentstack.io/v3/assets/bltc23b87e0fef43b66/bltdf560b526f10fd97/665dc9d841d701f3e198fff9/00_Bonus-Platform-Spread-01.png?format=pjpg&auto=webp&quality=90&width=1340&disable=upscale"
            alt="tastyfx platform on tablet and mobile"
            className="box-border caret-transparent w-full"
          />
        </div>
      </div>
    </div>
  );
};
