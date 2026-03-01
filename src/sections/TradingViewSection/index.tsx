export type TradingViewSectionProps = {
  variant: string;
  imageUrl: string;
  imageAlt: string;
  heading: React.ReactNode;
  listItems: string[];
  buttonText: string;
  buttonUrl: string;
  disclaimerText: React.ReactNode;
};

export const TradingViewSection = (props: TradingViewSectionProps) => {
  return (
    <div
      className={`box-border caret-transparent ${props.variant === "variant1" ? "block md:hidden" : "hidden md:block"}`}
    >
      <div
        className={`relative text-white items-center bg-black box-border caret-transparent flex flex-col ${props.variant === "variant1" ? "bg-[url('')] bg-no-repeat overflow-hidden bg-[position:0px_0px]" : "h-[725px] justify-center"}`}
      >
        {props.variant === "variant1" ? (
          <>
            <img
              src={props.imageUrl}
              alt={props.imageAlt}
              className="relative aspect-[2_/_1] box-border caret-transparent h-full min-h-[auto] min-w-[auto] object-cover object-[50%_0%] w-full md:min-h-0 md:min-w-0"
            />
            <div className="box-border caret-transparent w-full min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
              <div className="relative box-border caret-transparent max-w-screen-xl z-[9] mx-auto px-4 py-8 md:px-20">
                <div className="items-start box-border caret-transparent flex flex-col gap-y-3 mb-10">
                  <h2 className="text-[32px] font-medium box-border caret-transparent leading-[51.2px] min-h-[auto] min-w-[auto] uppercase mb-2 font-tusker_grotesk_6500 md:text-5xl md:leading-[76.8px] md:min-h-0 md:min-w-0">
                    <div className="text-[32px] box-border caret-transparent leading-[51.2px] md:text-5xl md:leading-[76.8px]">
                      {props.heading}
                    </div>
                  </h2>
                  <div className="text-base font-medium box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-xl md:leading-[30px] md:min-h-0 md:min-w-0">
                    <div className="text-base box-border caret-transparent leading-6 md:text-xl md:leading-[30px]">
                      <ul className="text-base box-border caret-transparent leading-6 list-none mb-4 pl-0 md:text-xl md:leading-[30px]">
                        {props.listItems.map((item, index) => (
                          <li
                            key={index}
                            className="relative text-base box-border caret-transparent leading-6 mb-4 pl-10 md:text-xl md:leading-[30px] before:accent-auto before:items-center before:bg-red-600 before:box-border before:caret-transparent before:text-white before:flex before:text-sm before:not-italic before:normal-nums before:font-medium before:h-6 before:justify-center before:tracking-[normal] before:leading-[21px] before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-6 before:mr-4 before:rounded-[50%] before:border-separate before:left-0 before:top-0.5 before:font-fa_solid_900"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent gap-x-6 flex flex-col gap-y-6 md:flex-row md:gap-y-[normal]">
                  <a
                    href={props.buttonUrl}
                    className="font-semibold items-center self-center bg-red-600 box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] text-center uppercase text-nowrap border border-red-600 px-6 py-3 rounded-[80px] border-solid md:self-auto md:min-h-0 md:min-w-0 hover:bg-red-800 hover:border-red-800"
                  >
                    {props.buttonText}
                  </a>
                </div>
                <div className="text-xs font-medium box-border caret-transparent leading-[18px] mt-14">
                  <div className="box-border caret-transparent">
                    {props.disclaimerText}
                  </div>
                  <div className="items-center box-border caret-transparent flex"></div>
                </div>
                <div className="box-border caret-transparent flex flex-col justify-around w-full md:w-6/12">
                  <img
                    alt=""
                    className="self-center box-border caret-transparent justify-self-center min-h-[auto] min-w-[auto] w-full mt-12 md:min-h-0 md:min-w-0 md:w-3/5 md:mt-0"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="box-border caret-transparent w-full absolute h-full object-cover inset-0">
              <img
                src={props.imageUrl}
                alt={props.imageAlt}
                className="absolute bg-cover box-border caret-transparent h-full object-cover w-full bg-center m-auto -inset-full"
              />
            </div>
            <div className="box-border caret-transparent min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto]">
              <div className="relative box-border caret-transparent max-w-screen-xl z-[9] mx-auto px-4 py-8 md:px-20">
                <div className="box-border caret-transparent flex text-left w-full">
                  <div className="box-border caret-transparent flex flex-col justify-around min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-6/12">
                    <div className="relative items-start box-border caret-transparent flex flex-col max-w-none min-h-0 min-w-0 md:max-w-[752px] md:min-h-[auto] md:min-w-[auto]">
                      <div className="items-start box-border caret-transparent gap-x-4 flex flex-col min-h-0 min-w-0 gap-y-4 mb-10 md:min-h-[auto] md:min-w-[auto]">
                        <h2 className="text-[32px] font-medium box-border caret-transparent leading-[51.2px] min-h-0 min-w-0 uppercase mb-2 font-tusker_grotesk_6500 md:text-5xl md:leading-[76.8px] md:min-h-[auto] md:min-w-[auto]">
                          <div className="text-[32px] box-border caret-transparent leading-[51.2px] md:text-5xl md:leading-[76.8px]">
                            {props.heading}
                          </div>
                        </h2>
                        <div className="text-base font-medium box-border caret-transparent leading-6 min-h-0 min-w-0 md:text-xl md:leading-[30px] md:min-h-[auto] md:min-w-[auto]">
                          <div className="text-base box-border caret-transparent leading-6 md:text-xl md:leading-[30px]">
                            <ul className="text-base box-border caret-transparent leading-6 list-none mb-4 pl-0 md:text-xl md:leading-[30px]">
                              {props.listItems.map((item, index) => (
                                <li
                                  key={index}
                                  className="relative text-base box-border caret-transparent leading-6 mb-4 pl-10 md:text-xl md:leading-[30px] before:accent-auto before:items-center before:bg-red-600 before:box-border before:caret-transparent before:text-white before:flex before:text-sm before:not-italic before:normal-nums before:font-medium before:h-6 before:justify-center before:tracking-[normal] before:leading-[21px] before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-6 before:mr-4 before:rounded-[50%] before:border-separate before:left-0 before:top-0.5 before:font-fa_solid_900"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-6 flex flex-col min-h-0 min-w-0 gap-y-6 md:flex-row md:min-h-[auto] md:min-w-[auto] md:gap-y-[normal]">
                        <a
                          href={props.buttonUrl}
                          className="font-semibold items-center self-center bg-red-600 box-border caret-transparent flex justify-center min-h-0 min-w-0 text-center uppercase text-nowrap border border-red-600 px-6 py-3 rounded-[80px] border-solid md:self-auto md:min-h-[auto] md:min-w-[auto] hover:bg-red-800 hover:border-red-800"
                        >
                          {props.buttonText}
                        </a>
                      </div>
                    </div>
                    <div className="text-xs font-medium box-border caret-transparent leading-[18px] min-h-0 min-w-0 mt-14 md:min-h-[auto] md:min-w-[auto]">
                      <div className="box-border caret-transparent">
                        {props.disclaimerText}
                      </div>
                      <div className="items-center box-border caret-transparent flex"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[radial-gradient(circle_at_25%_50%,rgba(29,25,27,0.95)_29%,rgba(27,27,27,0)_94%)] box-border caret-transparent mix-blend-multiply inset-0"></div>
          </>
        )}
      </div>
    </div>
  );
};
