export const WhyTradeSection = () => {
  return (
    <div className="bg-cover box-border caret-transparent gap-x-12 flex flex-col min-h-[560px] gap-y-12 w-full py-8 md:gap-x-20 md:flex-row md:gap-y-20 md:py-24">
      <div className="box-border caret-transparent gap-x-5 flex flex-col gap-y-5 w-full md:w-6/12">
        <div className="box-border caret-transparent">
          <div className="items-center box-border caret-transparent flex flex-col h-full">
            <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start gap-y-6 w-full">
              <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start gap-y-6">
                <h2 className="text-[32px] font-medium box-border caret-transparent leading-[38.4px] uppercase mb-2 pt-0 font-tusker_grotesk_6500 md:text-5xl md:leading-[57.6px] md:pt-6">
                  WE GET WHY YOU TRADE
                </h2>
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent">
                    <p className="text-sm font-normal box-border caret-transparent leading-[21px] mb-4 md:text-lg md:leading-[27px]">
                      Enough noise. We know what matters. Trade with a broker
                      who gets trading.
                    </p>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
                  <div className="items-center box-border caret-transparent gap-x-4 flex grid-cols-[24px_1fr] grid-rows-[auto] gap-y-2">
                    <img
                      src="https://c.animaapp.com/mm8252ngqkoE47/assets/image-1.svg"
                      alt="checkMark"
                      className="box-border caret-transparent h-5 w-5"
                    />
                    <p className="font-medium box-border caret-transparent">
                      Daily US dollar news
                    </p>
                  </div>
                  <div className="items-center box-border caret-transparent gap-x-4 flex grid-cols-[24px_1fr] grid-rows-[auto] gap-y-2">
                    <img
                      src="https://c.animaapp.com/mm8252ngqkoE47/assets/image-1.svg"
                      alt="checkMark"
                      className="box-border caret-transparent h-5 w-5"
                    />
                    <p className="font-medium box-border caret-transparent">
                      Forex-focused newsletters
                    </p>
                  </div>
                  <div className="items-center box-border caret-transparent gap-x-4 flex grid-cols-[24px_1fr] grid-rows-[auto] gap-y-2">
                    <img
                      src="https://c.animaapp.com/mm8252ngqkoE47/assets/image-1.svg"
                      alt="checkMark"
                      className="box-border caret-transparent h-5 w-5"
                    />
                    <p className="font-medium box-border caret-transparent">
                      24-hour trade support
                    </p>
                  </div>
                </div>
              </div>
              <div className="items-center box-border caret-transparent gap-x-6 flex flex-col gap-y-6 text-nowrap w-full md:flex-row">
                <a
                  aria-label=""
                  href="https://www.tastyfx.com/news/"
                  className="text-white font-semibold items-center self-center bg-red-600 box-border caret-transparent flex justify-center text-center uppercase text-nowrap border border-red-600 px-6 py-3 rounded-[80px] border-solid md:self-auto hover:bg-red-800 hover:border-red-800"
                >
                  GET THE LATEST NEWS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent gap-x-5 flex flex-col gap-y-5 w-full md:w-6/12">
        <div className="box-border caret-transparent max-w-[464px] ml-auto -mr-28 pl-8 md:max-w-none md:mx-0 md:pl-0">
          <div className="items-center box-border caret-transparent flex flex-col h-full">
            <div className="items-start self-center box-border caret-transparent gap-x-6 flex flex-col justify-start gap-y-6 w-full md:self-start">
              <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start gap-y-6">
                <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4"></div>
              </div>
              <div className="box-border caret-transparent">
                <video
                  autoplay=""
                  loop=""
                  muted=""
                  playsinline=""
                  className="box-border caret-transparent max-h-full max-w-full md:max-h-none md:max-w-none"
                >
                  <source
                    src="https://assets.contentstack.io/v3/assets/bltc23b87e0fef43b66/blt2f93883361b013f9/66634132145a101d8616e995/test_00HP_VidSUPPORTGFX_05.mp4"
                    type="video/mp4"
                    className="text-black font-normal box-border caret-transparent leading-[normal] font-times_new_roman"
                  />
                </video>
              </div>
              <div className="items-center box-border caret-transparent gap-x-6 flex flex-col gap-y-6 text-nowrap w-full md:flex-row"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
