export const CookiePreferenceModal = () => {
  return (
    <div
      aria-label="Preference center"
      role="region"
      className="fixed bg-white shadow-[rgba(0,0,0,0)_0px_2px_4px_0px,rgba(50,50,93,0.1)_0px_7px_14px_0px] box-border caret-transparent hidden h-full max-w-[730px] w-full z-[2147483647] m-auto rounded-sm inset-0 md:h-[610px] md:w-[730px]"
    >
      <div
        role="dialog"
        aria-label="Privacy Preference Center"
        className="font-normal caret-transparent h-full leading-[normal] text-left"
      >
        <div
          role="presentation"
          className="relative border-b-zinc-300 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 caret-transparent min-h-[52px] w-[calc(100%_-_20px)] pl-2.5 pr-5 py-2.5 border-b md:pr-2.5"
        >
          <div
            role="img"
            aria-label="tastyfx"
            className="items-center bg-no-repeat bg-contain caret-transparent inline-flex h-10 justify-center align-middle w-[180px] bg-center mt-[5px] md:mt-0"
          >
            <img
              alt="tastyfx"
              src="https://cdn.cookielaw.org/logos/482975d6-7601-4e75-b89e-3d3901e86f44/018f2533-da38-7b99-a818-b0df21c23f09/dff6f0fd-8bb6-4e70-bb00-2983ad5e551a/tastyfx-logo.png"
              className="text-[10px] caret-transparent max-h-full max-w-full overflow-hidden md:text-base"
            />
          </div>
          <div className="relative caret-transparent block float-right align-middle w-auto pl-2.5 md:inline-block md:float-none md:w-[calc(100%_-_190px)]">
            <h2 className="relative text-neutral-800 text-xl font-semibold caret-transparent hidden leading-6 max-h-12 max-w-full overflow-x-auto overflow-y-hidden text-ellipsis text-wrap ml-2.5 pr-5 md:text-[21.92px] md:block md:leading-[26.304px] md:max-h-[52.608px] md:max-w-[90%] md:overflow-x-hidden md:text-nowrap md:ml-0 md:pr-[21.92px]">
              Privacy Preference Center
            </h2>
            <div className="absolute caret-transparent right-[-9px] top-2/4">
              <button
                aria-label="Close preference center"
                className="text-neutral-600 text-[14.4px] bg-transparent bg-[url('https://cdn.cookielaw.org/logos/static/ot_close.svg')] bg-no-repeat bg-size-[12px] caret-transparent h-11 tracking-[0.144px] leading-[38px] text-center text-nowrap w-11 bg-center p-0 rounded-sm hover:text-zinc-800 hover:border-zinc-800"
              ></button>
            </div>
          </div>
        </div>
        <div className="relative caret-transparent h-[calc(100%_-_322px)] overflow-x-auto overflow-y-auto md:h-[calc(100%_-_185px)] md:overflow-x-hidden after:accent-auto after:caret-transparent after:clear-both after:text-neutral-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-worksans_variablefont_wght">
          <div className="text-neutral-800 text-[13.6px] bg-gray-50 caret-transparent hidden leading-[27.2px] border border-emerald-500 m-2.5 p-[5px] rounded-[3px] border-solid md:ml-7">
            <div className="caret-transparent leading-[normal] mr-[5px]">
              <img
                src="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-19.svg"
                alt="Icon"
                className="caret-transparent h-5 w-[30px]"
              />
            </div>
            <span className="caret-transparent leading-[normal]"></span>
          </div>
          <div className="relative box-border caret-transparent float-left h-full max-w-full overflow-x-hidden overflow-y-hidden w-full mr-0 md:overflow-x-auto md:mr-auto after:accent-auto after:caret-transparent after:clear-both after:text-neutral-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-worksans_variablefont_wght">
            <div
              aria-label="Cookie Categories"
              className="box-border caret-transparent float-left h-full w-full overflow-auto md:w-[30.6667%]"
            >
              <h2 className="text-2xl font-semibold caret-transparent block leading-9 w-full my-2.5 pl-3 md:hidden md:leading-[30px] md:w-auto md:my-0 md:pl-0">
                Privacy Preference Center
              </h2>
              <ul
                role="tablist"
                className="caret-transparent list-inside list-[circle] pl-0"
              >
                <li
                  role="presentation"
                  className="caret-transparent list-outside list-none"
                >
                  <div
                    role="tab"
                    className="relative bg-white caret-transparent border-green-600 overflow-hidden pl-3 pr-[5px] py-3 border-l-[10px]"
                  >
                    <h3 className="text-neutral-800 text-sm font-bold caret-transparent float-left leading-[19.6px] break-words">
                      Your Privacy
                    </h3>
                  </div>
                </li>
                <li
                  role="presentation"
                  className="caret-transparent list-outside list-none"
                >
                  <div
                    role="tab"
                    className="bg-zinc-100 border-b-zinc-300 border-r-neutral-800 border-t-neutral-800 caret-transparent overflow-hidden pl-3 pr-[5px] py-3 border-l-transparent border-l-[10px] border-b"
                  >
                    <h3 className="text-neutral-800 text-sm font-semibold caret-transparent float-left leading-[19.6px] break-words">
                      Targeting Cookies
                    </h3>
                  </div>
                </li>
                <li
                  role="presentation"
                  className="caret-transparent list-outside list-none"
                >
                  <div
                    role="tab"
                    className="bg-zinc-100 border-b-zinc-300 border-r-neutral-800 border-t-neutral-800 caret-transparent overflow-hidden pl-3 pr-[5px] py-3 border-l-transparent border-l-[10px] border-b"
                  >
                    <h3 className="text-neutral-800 text-sm font-semibold caret-transparent float-left leading-[19.6px] break-words">
                      Strictly Necessary Cookies
                    </h3>
                  </div>
                </li>
                <li
                  role="presentation"
                  className="caret-transparent list-outside list-none"
                >
                  <div
                    role="tab"
                    className="bg-zinc-100 border-b-zinc-300 border-r-neutral-800 border-t-neutral-800 caret-transparent overflow-hidden pl-3 pr-[5px] py-3 border-l-transparent border-l-[10px] border-b"
                  >
                    <h3 className="text-neutral-800 text-sm font-semibold caret-transparent float-left leading-[19.6px] break-words">
                      Performance Cookies
                    </h3>
                  </div>
                </li>
                <li
                  role="presentation"
                  className="caret-transparent list-outside list-none"
                >
                  <div
                    role="tab"
                    className="bg-zinc-100 border-b-zinc-300 border-r-neutral-800 border-t-neutral-800 caret-transparent overflow-hidden pl-3 pr-[5px] py-3 border-l-transparent border-l-[10px] border-b"
                  >
                    <h3 className="text-neutral-800 text-sm font-semibold caret-transparent float-left leading-[19.6px] break-words">
                      Functional Cookies
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="box-border caret-transparent float-left h-full w-full overflow-auto ml-[3%] md:w-[65.3333%]">
              <div
                role="tabpanel"
                className="relative caret-transparent break-words w-[calc(100%_-_15px)] overflow-hidden ml-2.5 my-[5px] pb-2.5 rounded-[3px] md:static md:w-auto md:ml-0 md:mt-5 md:mb-0"
              >
                <h4 className="text-neutral-800 text-sm font-bold caret-transparent inline-block leading-[18.2px] max-w-[80%] break-words align-middle mb-2.5 px-2.5">
                  Your Privacy
                </h4>
                <p className="text-neutral-800 text-[13.008px] caret-transparent leading-[19.512px] break-words px-2.5">
                  When you visit any website, it may store or retrieve
                  information on your browser, mostly in the form of cookies.
                  This information might be about you, your preferences or your
                  device and is mostly used to make the site work as you expect
                  it to. The information does not usually directly identify you,
                  but it can give you a more personalized web experience.
                  Because we respect your right to privacy, you can choose not
                  to allow some types of cookies. Click on the different
                  category headings to find out more and change our default
                  settings. However, blocking some types of cookies may impact
                  your experience of the site and the services we are able to
                  offer.
                </p>
              </div>
              <div
                role="tabpanel"
                className="relative caret-transparent hidden break-words w-[calc(100%_-_15px)] overflow-hidden ml-2.5 my-[5px] pb-2.5 rounded-[3px] md:static md:w-auto md:ml-0 md:mt-5 md:mb-0"
              >
                <div className="caret-transparent block float-right break-words w-[calc(100%_-_20px)] pt-2.5 pb-2 px-2.5 md:inline-block md:float-none md:pr-0">
                  <h4 className="text-neutral-800 text-sm font-bold caret-transparent float-left leading-[18.2px] max-w-[80%] break-words align-middle">
                    Targeting Cookies
                  </h4>
                  <div className="relative caret-transparent float-right break-words z-[1] px-[7px]">
                    <label className="relative font-semibold caret-transparent inline-block h-[25px] opacity-80 break-words pointer-events-none w-[45px]">
                      <span className="absolute font-normal bg-gray-600 caret-transparent block outline-offset-1 break-words border rounded-[20px] border-solid border-white inset-0 before:accent-auto before:bg-white before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[18px] before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:outline-offset-1 before:break-words before:pointer-events-none before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-[18px] before:rounded-[20px] before:border-separate before:left-0.5 before:bottom-[3px] before:font-worksans_variablefont_wght"></span>
                      <span className="font-normal caret-transparent hidden break-words">
                        Targeting Cookies
                      </span>
                    </label>
                  </div>
                  <div className="caret-transparent float-right break-words align-middle"></div>
                </div>
                <p className="text-neutral-800 text-[13.008px] caret-transparent leading-[19.512px] break-words pb-2.5 px-2.5">
                  These cookies may be set through our site by our advertising
                  partners. They may be used by those companies to build a
                  profile of your interests and show you relevant adverts on
                  other sites. They do not store directly personal information,
                  but are based on uniquely identifying your browser and
                  internet device. If you do not allow these cookies, you will
                  experience less targeted advertising.
                </p>
              </div>
              <div
                role="tabpanel"
                className="relative caret-transparent hidden break-words w-[calc(100%_-_15px)] overflow-hidden ml-2.5 my-[5px] pb-2.5 rounded-[3px] md:static md:w-auto md:ml-0 md:mt-5 md:mb-0"
              >
                <div className="caret-transparent block float-right break-words w-[calc(100%_-_20px)] pt-2.5 pb-2 px-2.5 md:inline-block md:float-none md:pr-0">
                  <h4 className="text-neutral-800 text-sm font-bold caret-transparent float-left leading-[18.2px] max-w-[80%] break-words align-middle">
                    Strictly Necessary Cookies
                  </h4>
                  <div className="caret-transparent float-right max-w-none break-words align-middle pr-[7px] md:max-w-[28%]">
                    <div className="text-blue-700 text-[13.008px] font-bold caret-transparent leading-[19.512px] break-words">
                      Always Active
                    </div>
                  </div>
                </div>
                <p className="text-neutral-800 text-[13.008px] caret-transparent leading-[19.512px] break-words pb-2.5 px-2.5">
                  These cookies are necessary for the website to function and
                  cannot be switched off in our systems. They are usually only
                  set in response to actions made by you which amount to a
                  request for services, such as setting your privacy
                  preferences, logging in or filling in forms. You can set your
                  browser to block or alert you about these cookies, but some
                  parts of the site will not then work.
                </p>
              </div>
              <div
                role="tabpanel"
                className="relative caret-transparent hidden break-words w-[calc(100%_-_15px)] overflow-hidden ml-2.5 my-[5px] pb-2.5 rounded-[3px] md:static md:w-auto md:ml-0 md:mt-5 md:mb-0"
              >
                <div className="caret-transparent block float-right break-words w-[calc(100%_-_20px)] pt-2.5 pb-2 px-2.5 md:inline-block md:float-none md:pr-0">
                  <h4 className="text-neutral-800 text-sm font-bold caret-transparent float-left leading-[18.2px] max-w-[80%] break-words align-middle">
                    Performance Cookies
                  </h4>
                  <div className="relative caret-transparent float-right break-words z-[1] px-[7px]">
                    <label className="relative font-semibold caret-transparent inline-block h-[25px] opacity-80 break-words pointer-events-none w-[45px]">
                      <span className="absolute font-normal bg-gray-600 caret-transparent block outline-offset-1 break-words border rounded-[20px] border-solid border-white inset-0 before:accent-auto before:bg-white before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[18px] before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:outline-offset-1 before:break-words before:pointer-events-none before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-[18px] before:rounded-[20px] before:border-separate before:left-0.5 before:bottom-[3px] before:font-worksans_variablefont_wght"></span>
                      <span className="font-normal caret-transparent hidden break-words">
                        Performance Cookies
                      </span>
                    </label>
                  </div>
                  <div className="caret-transparent float-right break-words align-middle"></div>
                </div>
                <p className="text-neutral-800 text-[13.008px] caret-transparent leading-[19.512px] break-words pb-2.5 px-2.5">
                  These cookies allow us to count visits and traffic sources so
                  we can measure and improve the performance of our site. They
                  help us to know which pages are the most and least popular and
                  see how visitors move around the site. If you do not allow
                  these cookies we will not know when you have visited our site,
                  and will not be able to monitor its performance.
                </p>
              </div>
              <div
                role="tabpanel"
                className="relative caret-transparent hidden break-words w-[calc(100%_-_15px)] overflow-hidden ml-2.5 my-[5px] pb-2.5 rounded-[3px] md:static md:w-auto md:ml-0 md:mt-5 md:mb-0"
              >
                <div className="caret-transparent block float-right break-words w-[calc(100%_-_20px)] pt-2.5 pb-2 px-2.5 md:inline-block md:float-none md:pr-0">
                  <h4 className="text-neutral-800 text-sm font-bold caret-transparent float-left leading-[18.2px] max-w-[80%] break-words align-middle">
                    Functional Cookies
                  </h4>
                  <div className="relative caret-transparent float-right break-words z-[1] px-[7px]">
                    <label className="relative font-semibold caret-transparent inline-block h-[25px] opacity-80 break-words pointer-events-none w-[45px]">
                      <span className="absolute font-normal bg-gray-600 caret-transparent block outline-offset-1 break-words border rounded-[20px] border-solid border-white inset-0 before:accent-auto before:bg-white before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[18px] before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:outline-offset-1 before:break-words before:pointer-events-none before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-[18px] before:rounded-[20px] before:border-separate before:left-0.5 before:bottom-[3px] before:font-worksans_variablefont_wght"></span>
                      <span className="font-normal caret-transparent hidden break-words">
                        Functional Cookies
                      </span>
                    </label>
                  </div>
                  <div className="caret-transparent float-right break-words align-middle"></div>
                </div>
                <p className="text-neutral-800 text-[13.008px] caret-transparent leading-[19.512px] break-words pb-2.5 px-2.5">
                  These cookies enable the website to provide enhanced
                  functionality and personalization. They may be set by us or by
                  third party providers whose services we have added to our
                  pages. If you do not allow these cookies then some or all of
                  these services may not function properly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="relative caret-transparent hidden h-[calc(100%_-_322px)] w-full md:h-[calc(100%_-_185px)]">
          <div className="caret-transparent h-full">
            <div className="border-b-zinc-300 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 caret-transparent inline-block h-[70px] w-full px-0 py-[15px] border-b md:h-5 md:w-[calc(100%_-_50px)] md:pl-5 md:pr-[30px]">
              <div className="caret-transparent inline-block pl-[15px] md:pl-0">
                <button
                  aria-label="Back"
                  className="text-neutral-600 text-[14.4px] bg-transparent caret-transparent tracking-[0.144px] text-center text-nowrap p-0 rounded-sm hover:underline"
                >
                  <img
                    src="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-20.svg"
                    alt="Icon"
                    className="caret-transparent h-3 tracking-[normal] text-left w-3"
                  />
                </button>
                <h3 className="text-neutral-800 font-bold caret-transparent inline-block leading-[20.8px] ml-2.5">
                  Cookie List
                </h3>
              </div>
              <div className="relative caret-transparent inline-block float-none w-[calc(100%_-_15px)] pl-[15px] pt-2 bottom-auto md:block md:float-right md:w-auto md:pl-0 md:pt-0 md:bottom-1.5">
                <div className="relative bg-white caret-transparent inline-block align-middle w-[calc(100%_-_55px)] md:w-[300px]">
                  <input
                    type="text"
                    name="vendor-search-handler"
                    placeholder="Search…"
                    aria-label="Cookie list search"
                    className="text-neutral-600 text-[12.8px] box-border caret-transparent block float-left h-8 w-full border border-neutral-300 pl-[15px] pr-[35px] py-1.5 rounded-[50px] border-solid"
                  />
                  <img
                    src="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-21.svg"
                    alt="Icon"
                    className="absolute caret-transparent h-[30px] leading-4 w-[30px] right-0 top-0.5"
                  />
                </div>
                <div className="relative text-[0px] caret-transparent block float-right align-middle ml-5 right-[15px] md:inline-block md:float-none md:right-auto">
                  <button
                    aria-label="Filter Cookie List"
                    className="relative text-neutral-600 bg-blue-700 caret-transparent h-8 leading-[38px] text-center text-nowrap w-8 border border-zinc-400 p-0 rounded-[17px] border-solid hover:text-zinc-800 hover:border-zinc-500"
                  >
                    <img
                      src="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-22.svg"
                      alt="Icon"
                      className="absolute caret-transparent h-[15px] leading-[normal] text-left w-[15px] pt-[5px] left-2/4 top-2/4"
                    />
                  </button>
                </div>
              </div>
            </div>
            <section className="caret-transparent h-auto max-h-[calc(100%_-_96px)] overflow-x-auto overflow-y-auto w-[calc(100%_-_18px)] mr-[3px] mt-4 mb-1 pl-2.5 pr-[5px] pt-[13px] md:h-[calc(100%_-_86px)] md:overflow-x-hidden md:w-auto md:pl-[30px] md:pr-[27px] md:pt-5">
              <div className="caret-transparent w-full after:accent-auto after:caret-transparent after:clear-both after:text-neutral-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-worksans_variablefont_wght">
                <div className="box-border caret-transparent float-left w-full">
                  <div className="bg-white caret-transparent inline-block min-h-[30px] min-w-[200px] w-full">
                    <div className="caret-transparent inline-block w-full">
                      <div className="relative caret-transparent float-right w-[calc(100%_-_23px)] right-[23px]">
                        <span className="relative text-neutral-800 text-[13.008px] caret-transparent block float-right max-w-[55px] break-words text-center">
                          Consent
                        </span>
                        <span className="relative text-neutral-800 text-[13.008px] caret-transparent block float-right max-w-[100px] break-words text-center mr-2.5">
                          Leg.Interest
                        </span>
                      </div>
                      <div className="relative caret-transparent float-right w-[calc(100%_-_23px)] z-[1] right-[23px]">
                        <div className="relative caret-transparent float-left h-[21px] w-[21px] z-[1] left-5">
                          <label className="relative font-semibold items-center caret-transparent flex min-h-7 opacity-80 pointer-events-none pl-[30px] before:accent-auto before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-semibold before:h-[18px] before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:opacity-80 before:pointer-events-none before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-[18px] before:border before:border-blue-700 before:rounded-[3px] before:border-separate before:border-solid before:left-1 before:top-1 before:font-worksans_variablefont_wght">
                            <span className="text-neutral-800 font-normal caret-transparent hidden">
                              checkbox label
                            </span>
                          </label>
                          <span className="relative text-neutral-800 text-xs caret-transparent hidden float-left pr-[5px] -top-1.5">
                            label
                          </span>
                        </div>
                        <div className="relative caret-transparent float-right h-[21px] w-[21px] z-[1] right-[15px]">
                          <label className="relative font-semibold items-center caret-transparent flex h-full min-h-7 opacity-80 pointer-events-none before:accent-auto before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-semibold before:h-[18px] before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:opacity-80 before:pointer-events-none before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-[18px] before:border before:border-blue-700 before:rounded-[3px] before:border-separate before:border-solid before:left-1 before:top-1 before:font-worksans_variablefont_wght">
                            <span className="text-neutral-800 font-normal caret-transparent hidden">
                              checkbox label
                            </span>
                          </label>
                          <span className="relative text-neutral-800 text-xs caret-transparent hidden float-left pr-[5px] -top-1.5">
                            label
                          </span>
                        </div>
                        <div className="relative caret-transparent float-right h-[21px] w-[21px] z-[1] right-20">
                          <label className="relative font-semibold items-center caret-transparent flex min-h-7 opacity-80 pointer-events-none pl-[30px] before:accent-auto before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-semibold before:h-[18px] before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:opacity-80 before:pointer-events-none before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-[18px] before:border before:border-blue-700 before:rounded-[3px] before:border-separate before:border-solid before:left-1 before:top-1 before:font-worksans_variablefont_wght">
                            <span className="text-neutral-800 font-normal caret-transparent hidden">
                              checkbox label
                            </span>
                          </label>
                          <span className="relative text-neutral-800 text-xs caret-transparent hidden float-left pr-[5px] -top-1.5">
                            label
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="absolute bg-white shadow-[rgb(199,197,199)_-3px_-3px_5px_-2px] caret-transparent hidden z-[2147483647] border-[12px] border-solid border-transparent right-[30px] top-[75px] md:right-[35px] md:top-10"></div>
          <section className="absolute caret-transparent hidden h-[90%] max-h-[350px] w-[300px] z-[2147483646] right-0 top-[81px] md:top-[46px]">
            <div className="bg-white shadow-[rgb(199,197,199)_0px_0px_12px_2px] caret-transparent h-full ml-[5px] mr-2.5 my-[5px] pr-2.5 rounded-[3px]">
              <div className="text-blue-700 text-[14.4px] font-bold caret-transparent float-left max-w-[150px] text-ellipsis text-nowrap overflow-hidden mt-[15px] mb-2.5 pl-[15px] pr-px py-px"></div>
              <button className="text-neutral-800 text-[14.4px] font-bold bg-transparent caret-transparent block float-right tracking-[0.144px] leading-[14.4px] max-w-[200px] text-center mt-[15px] mb-2.5 px-px rounded-sm">
                Clear
              </button>
              <div className="caret-transparent clear-both max-h-[calc(100%_-_60px)] overflow-x-hidden overflow-y-auto">
                <ul className="caret-transparent list-inside list-[circle] min-h-[35px] pl-0">
                  <li className="caret-transparent clear-both list-outside list-none min-h-5 ml-[15px] mb-[5px]">
                    <div className="relative caret-transparent z-[1]">
                      <label className="relative font-semibold items-center caret-transparent flex min-h-7 opacity-80 pointer-events-none pl-[30px] before:accent-auto before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-semibold before:h-[18px] before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:opacity-80 before:pointer-events-none before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-[18px] before:border before:border-blue-700 before:rounded-[3px] before:border-separate before:border-solid before:left-1 before:top-1 before:font-worksans_variablefont_wght">
                        <span className="text-neutral-800 text-[12.8px] font-normal caret-transparent block leading-[14.08px]">
                          checkbox label
                        </span>
                      </label>
                      <span className="relative text-neutral-800 text-[12.8px] caret-transparent hidden float-left leading-[14.08px] pr-[5px] top-0.5">
                        label
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="caret-transparent mt-2.5 mx-[15px]">
                  <button className="text-white text-[14.4px] font-bold bg-green-600 caret-transparent tracking-[0.144px] leading-[14.4px] max-w-[200px] text-center border border-green-600 mr-2.5 mb-4 px-[30px] py-3 rounded-sm border-solid">
                    Apply
                  </button>
                  <button className="text-white text-[14.4px] font-bold bg-green-600 caret-transparent tracking-[0.144px] leading-[14.4px] max-w-[200px] text-center border border-green-600 mb-4 px-[30px] py-3 rounded-sm border-solid">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
        <div className="absolute border-b-neutral-800 border-l-neutral-800 border-r-neutral-800 border-t-zinc-300 caret-transparent max-h-[300px] w-full border-t bottom-0 md:max-h-40">
          <div className="caret-transparent">
            <button className="text-white text-[13.008px] font-semibold bg-green-600 caret-transparent tracking-[0.13008px] min-h-10 min-w-[155px] text-center text-nowrap w-[calc(100%_-_33px)] border border-green-600 mx-[15px] my-5 px-[30px] py-2.5 rounded-sm border-solid md:w-auto">
              Confirm My Preferences
            </button>
            <div className="caret-transparent float-left ml-[15px]">
              <button className="text-white text-[13.008px] font-semibold bg-green-600 caret-transparent inline-block float-none tracking-[0.13008px] min-h-10 text-center text-nowrap w-[calc(100%_-_33px)] border border-green-600 mr-4 my-5 px-[30px] py-2.5 rounded-sm border-solid md:block md:float-right md:w-auto">
                Accept All
              </button>
            </div>
          </div>
          <div className="bg-zinc-100 caret-transparent h-[30px] text-right w-full rounded-b-sm">
            <a
              href="https://www.onetrust.com/products/cookie-consent/"
              aria-label="Powered by OneTrust Opens in a new Tab"
              className="text-neutral-600 text-xs bg-no-repeat bg-contain caret-transparent inline-block h-[25px] text-left w-[152px] bg-center mr-2.5 mt-[5px]"
            >
              <img
                alt="Powered by Onetrust"
                src="https://cdn.cookielaw.org/logos/static/powered_by_logo.svg"
                title="Powered by OneTrust Opens in a new Tab"
                className="caret-transparent h-4 w-[136px] overflow-hidden"
              />
            </a>
          </div>
        </div>
      </div>
      <iframe
        title="onetrust-text-resize"
        className="absolute caret-transparent top-[-50000px] w-[1600px]"
      ></iframe>
    </div>
  );
};
