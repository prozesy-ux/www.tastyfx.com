export const CookieBanner = () => {
  return (
    <div
      role="region"
      aria-label="Cookie banner"
      className="fixed bg-white shadow-[rgba(0,0,0,0.2)_0px_0px_18px_0px] box-border caret-transparent max-h-[90%] overflow-x-hidden overflow-y-auto z-[2147483645] bottom-0 inset-x-0"
    >
      <div
        role="dialog"
        aria-label="Privacy"
        className="font-normal caret-transparent leading-[normal] text-left"
      >
        <div className="relative box-border caret-transparent max-w-full w-full mx-auto px-5 md:px-0 after:accent-auto after:caret-transparent after:clear-both after:text-neutral-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-worksans_variablefont_wght">
          <div className="caret-transparent after:accent-auto after:caret-transparent after:clear-both after:text-neutral-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-worksans_variablefont_wght">
            <div className="relative box-border caret-transparent float-left w-full md:w-[55%]">
              <div className="caret-transparent hidden"></div>
              <div className="caret-transparent overflow-hidden ml-0 mt-12 mb-2.5 md:ml-8 md:mt-5">
                <div className="text-neutral-800 text-[13.008px] caret-transparent clear-both float-left leading-[19.512px]">
                  By clicking “Accept Cookies”, you agree to the storing of
                  cookies on your device to enhance site navigation, analyze
                  site usage, and assist in our marketing efforts. To learn
                  more, please review our{" "}
                  <a
                    href="https://www.ig.com/usermanagement/customeragreements?igCompany=igus&agreementType=privacy_access_policies&locale=en_US&legalEntity=IGUS"
                    aria-label="More information about your privacy, opens in a new tab"
                    className="text-green-600 font-bold caret-transparent underline hover:no-underline"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent float-left min-h-px text-center w-full m-0 px-0 md:w-[44%] md:m-auto md:px-[2%]">
              <div className="caret-transparent block text-left mr-0 md:inline-block md:mr-auto">
                <button
                  aria-label="Preferences, Opens the preference center dialog"
                  className="text-black text-[13.008px] font-semibold bg-white caret-transparent tracking-[0.13008px] leading-[15.6096px] min-w-[125px] outline-offset-1 break-words text-center w-full mr-[13.008px] mt-0 mb-4 px-0 py-3 rounded-sm md:w-auto md:mt-[13.008px] before:accent-auto before:bg-[url(data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20height=%271em%27%20viewBox=%270%200%20512%20512%27%3E%3C!--!%20Font%20Awesome%20Free%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20%28Commercial%20License)] before:bg-center before:bg-no-repeat before:bg-contain before:caret-transparent before:text-black before:inline-block before:text-[13.008px] before:not-italic before:normal-nums before:font-semibold before:h-[13.008px] before:tracking-[0.13008px] before:leading-[15.6096px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:align-middle before:visible before:w-[13.008px] before:mr-[6.504px] before:border-separate before:font-worksans_variablefont_wght"
                >
                  Preferences
                </button>
                <button className="text-white text-[13.008px] font-semibold bg-green-600 caret-transparent tracking-[0.13008px] leading-[15.6096px] min-w-[125px] outline-offset-1 break-words text-center w-full border border-green-600 mr-[13.008px] mt-0 mb-4 px-2.5 py-3 rounded-sm border-solid md:w-auto md:mt-[13.008px]">
                  Accept Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute caret-transparent transform-none m-0 right-0.5 top-1.5 md:translate-x-[-50.0%] md:translate-y-[-50.0%] md:m-auto md:right-0 md:top-2/4">
          <button
            aria-label="Close"
            className="relative text-neutral-600 text-[14.4px] bg-transparent bg-[url('https://cdn.cookielaw.org/logos/static/ot_close.svg')] bg-no-repeat bg-size-[12px] caret-transparent h-11 tracking-[0.144px] leading-[38px] text-center text-nowrap w-11 bg-center m-auto p-0 rounded-sm right-auto md:-right-3 hover:text-zinc-800 hover:border-zinc-500"
          ></button>
        </div>
      </div>
    </div>
  );
};
