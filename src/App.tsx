import { TopBar } from "@/sections/TopBar";
import { MainNavbar } from "@/sections/MainNavbar";
import { SearchBar } from "@/components/SearchBar";
import { MobileNavbar } from "@/sections/MobileNavbar";
import { MobileMenuDrawer } from "@/sections/MobileNavbar/components/MobileMenuDrawer";
import { Hero } from "@/sections/Hero";
import { BackedBySection } from "@/sections/BackedBySection";
import { ProfessionalPricingSection } from "@/sections/ProfessionalPricingSection";
import { AwardWinningSection } from "@/sections/AwardWinningSection";
import { LogoCarousel } from "@/components/LogoCarousel";
import { WhyTradeSection } from "@/sections/WhyTradeSection";
import { CashEarnsSection } from "@/sections/CashEarnsSection";
import { TechnologySection } from "@/sections/TechnologySection";
import { MarketsCarousel } from "@/components/MarketsCarousel";
import { TradingViewSection } from "@/sections/TradingViewSection";
import { BonusSection } from "@/sections/BonusSection";
import { LearnMoreCards } from "@/components/LearnMoreCards";
import { Footer } from "@/sections/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { CookiePreferenceModal } from "@/components/CookiePreferenceModal";
import { ChatWidget } from "@/components/ChatWidget";

export const App = () => {
  return (
    <body className="text-neutral-800 text-base not-italic normal-nums font-medium accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc max-w-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-worksans_variablefont_wght">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <TopBar />
            <MainNavbar />
            <SearchBar />
            <MobileNavbar />
            <MobileMenuDrawer />
            <div className="box-border caret-transparent transform-none md:-translate-y-8">
              <main className="box-border caret-transparent min-h-[700px]">
                <section className="box-border caret-transparent">
                  <div className="font-light box-border caret-transparent">
                    <Hero />
                  </div>
                </section>
                <section className="box-border caret-transparent">
                  <div className="font-light bg-neutral-100 box-border caret-transparent">
                    <div className="box-border caret-transparent w-full">
                      <BackedBySection />
                    </div>
                  </div>
                </section>
                <section className="box-border caret-transparent">
                  <div className="font-light box-border caret-transparent">
                    <div className="box-border caret-transparent w-full">
                      <ProfessionalPricingSection />
                    </div>
                  </div>
                </section>
                <section className="box-border caret-transparent">
                  <div className="font-light bg-neutral-100 box-border caret-transparent py-8 md:py-12">
                    <div className="box-border caret-transparent w-full">
                      <AwardWinningSection />
                    </div>
                    <div className="box-border caret-transparent w-full">
                      <div className="relative box-border caret-transparent max-w-screen-xl z-[9] mx-auto pb-8 px-0 md:px-20">
                        <LogoCarousel />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="box-border caret-transparent">
                  <div className="font-light box-border caret-transparent">
                    <div className="items-center box-border caret-transparent gap-x-0 flex justify-center gap-y-0 w-full overflow-hidden">
                      <div className="box-border caret-transparent max-w-full w-[1280px] px-4 md:w-screen md:px-20">
                        <WhyTradeSection />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="box-border caret-transparent">
                  <div className="font-light box-border caret-transparent">
                    <div className="box-border caret-transparent">
                      <CashEarnsSection
                        variant="variant1"
                        backgroundImageUrl="https://images.contentstack.io/v3/assets/bltc23b87e0fef43b66/blt08a4851b1c922708/68af43e87e8fa93604133b9b/74_T3-HEADER-01-Gradient.jpg?format=pjpg&auto=webp&quality=90"
                        backgroundImageAlt="Phone with chart details"
                        title="YOUR CASH EARNS 8% APY"
                        bulletPoints={[
                          "Prime accounts earn interest on available funds",
                          "Plus tighter spreads and cashback up to 15%",
                          "Designed for traders who demand more from their broker",
                        ]}
                        ctaText="LEARN ABOUT PRIME"
                        ctaUrl="https://www.tastyfx.com/accounts/prime/"
                        termsText="Terms & conditions apply."
                        secondaryImageUrl="https://images.contentstack.io/v3/assets/bltc23b87e0fef43b66/blta9cb4e738162c0c1/6723ee752fb474762eb217de/blank-25.png?format=pjpg&auto=webp&quality=90"
                        secondaryImageAlt=""
                      />
                      <CashEarnsSection
                        variant="variant2"
                        backgroundImageUrl="https://images.contentstack.io/v3/assets/bltc23b87e0fef43b66/blt08a4851b1c922708/68af43e87e8fa93604133b9b/74_T3-HEADER-01-Gradient.jpg?format=pjpg&auto=webp&quality=90"
                        backgroundImageAlt="Phone with chart details"
                        title="YOUR CASH EARNS 8% APY"
                        bulletPoints={[
                          "Prime accounts earn interest on available funds",
                          "Plus tighter spreads and cashback up to 15%",
                          "Designed for traders who demand more from their broker",
                        ]}
                        ctaText="LEARN ABOUT PRIME"
                        ctaUrl="https://www.tastyfx.com/accounts/prime/"
                        termsText="Terms & conditions apply."
                        secondaryImageUrl="https://images.contentstack.io/v3/assets/bltc23b87e0fef43b66/blta9cb4e738162c0c1/6723ee752fb474762eb217de/blank-25.png?format=pjpg&auto=webp&quality=90"
                        secondaryImageAlt=""
                      />
                    </div>
                  </div>
                </section>
                <section className="box-border caret-transparent">
                  <div className="font-light bg-neutral-100 box-border caret-transparent">
                    <div className="items-center box-border caret-transparent gap-x-0 flex justify-center gap-y-0 w-full overflow-hidden">
                      <div className="box-border caret-transparent max-w-full w-[1280px] px-4 md:w-screen md:px-20">
                        <TechnologySection />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="box-border caret-transparent">
                  <div className="font-light box-border caret-transparent my-16 md:my-32">
                    <div className="box-border caret-transparent w-full overflow-hidden">
                      <MarketsCarousel />
                    </div>
                  </div>
                </section>
                <section className="box-border caret-transparent">
                  <div className="font-light box-border caret-transparent">
                    <div className="box-border caret-transparent">
                      <TradingViewSection
                        variant="variant1"
                        imageUrl="https://images.contentstack.io/v3/assets/bltc23b87e0fef43b66/bltba711f01b867824d/66abb054bc6ec2ecd3f9b6b8/TT1763_LP-GFX_T3H_02-clean.jpg?format=pjpg&auto=webp&quality=90"
                        imageAlt="TradingView platform on laptop"
                        heading="SUPERCHARGE YOUR SUPERCHARTS"
                        listItems={[
                          "Seamless TradingView integration",
                          "Switch to tastyfx and earn up to $10k bonus*",
                          "Cashback rebate up to 15%",
                        ]}
                        buttonText="TRADE FX WITH TRADINGVIEW"
                        buttonUrl="https://www.tastyfx.com/tradingview/"
                        disclaimerText={
                          <p className="box-border caret-transparent mb-4">
                            * See our New Account Bonus Terms and Conditions{" "}
                            <a
                              href="https://assets.contentstack.io/v3/assets/bltc23b87e0fef43b66/blt9dfa5cc22b255d7a/new-account-bonus-terms-and-conditions"
                              className="box-border caret-transparent underline hover:text-red-600 hover:border-red-600"
                            >
                              here
                            </a>
                            .
                          </p>
                        }
                      />
                      <TradingViewSection
                        variant="variant2"
                        imageUrl="https://images.contentstack.io/v3/assets/bltc23b87e0fef43b66/bltba711f01b867824d/66abb054bc6ec2ecd3f9b6b8/TT1763_LP-GFX_T3H_02-clean.jpg?format=pjpg&auto=webp&quality=90"
                        imageAlt="TradingView platform on laptop"
                        heading="SUPERCHARGE YOUR SUPERCHARTS"
                        listItems={[
                          "Seamless TradingView integration",
                          "Switch to tastyfx and earn up to $10k bonus*",
                          "Cashback rebate up to 15%",
                        ]}
                        buttonText="TRADE FX WITH TRADINGVIEW"
                        buttonUrl="https://www.tastyfx.com/tradingview/"
                        disclaimerText={
                          <p className="box-border caret-transparent mb-4">
                            * See our New Account Bonus Terms and Conditions{" "}
                            <a
                              href="https://assets.contentstack.io/v3/assets/bltc23b87e0fef43b66/blt9dfa5cc22b255d7a/new-account-bonus-terms-and-conditions"
                              className="box-border caret-transparent underline hover:text-red-600 hover:border-red-600"
                            >
                              here
                            </a>
                            .
                          </p>
                        }
                      />
                    </div>
                  </div>
                </section>
                <section className="box-border caret-transparent">
                  <div className="font-light box-border caret-transparent">
                    <div className="box-border caret-transparent">
                      <BonusSection />
                    </div>
                  </div>
                </section>
                <section className="box-border caret-transparent">
                  <div className="font-light box-border caret-transparent">
                    <div className="box-border caret-transparent w-full">
                      <div className="relative box-border caret-transparent max-w-screen-xl z-[9] mx-auto px-4 py-8 md:px-20">
                        <div className="text-[32px] font-medium box-border caret-transparent leading-[51.2px] uppercase mb-8 font-tusker_grotesk_6500 md:text-5xl md:leading-[76.8px]">
                          INTERESTED? LEARN MORE.
                        </div>
                        <LearnMoreCards />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="box-border caret-transparent">
                  <div className="font-light box-border caret-transparent">
                    <div className="box-border caret-transparent w-full">
                      <div className="relative box-border caret-transparent max-w-screen-xl z-[9] mx-auto px-4 py-8 md:px-20">
                        <div className="box-border caret-transparent max-w-none w-full mx-auto md:max-w-[1140px]">
                          <div className="box-border caret-transparent flex flex-wrap">
                            <div className="box-border caret-transparent shrink-0 max-w-full w-full">
                              <div className="box-border caret-transparent">
                                <div className="box-border caret-transparent">
                                  <hr className="box-border caret-transparent opacity-25 border-neutral-800 my-4 border-b-0 border-x-0" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="box-border caret-transparent">
                  <div className="font-light box-border caret-transparent">
                    <div className="box-border caret-transparent">
                      <div className="relative text-neutral-500 text-sm font-normal box-border caret-transparent leading-[21px] max-w-screen-xl w-full mx-auto pb-1 px-4 md:pb-4 md:px-20">
                        <div className="box-border caret-transparent">
                          <p className="box-border caret-transparent mb-4">
                            <sup className="relative text-[10.5px] box-border caret-transparent leading-[0px] top-[-5.25px]">
                              1{" "}
                            </sup>
                            #1 US Broker was awarded to tastyfx on January 27,
                            2026 during the ForexBrokers.com 2026 Annual Awards.
                            #1 Overall Broker, #1 Mobile App, #1 Trust Score,
                            and #1 Web Platform are accolades presented to IG,
                            parent company of tastyfx during the same review.
                            Accolades were awarded by the ForexBrokers.com
                            research team based on demonstrated excellence in
                            categories considered important to investors,
                            traders, and consumers.{" "}
                            <a
                              href="https://www.forexbrokers.com/how-we-test"
                              className="text-black font-semibold box-border caret-transparent underline hover:text-red-600 hover:border-red-600"
                            >
                              Click here
                            </a>
                            to learn about how they rate brokers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="box-border caret-transparent">
                  <div className="font-light box-border caret-transparent">
                    <div className="box-border caret-transparent">
                      <div className="relative text-neutral-500 text-sm font-normal box-border caret-transparent leading-[21px] max-w-screen-xl w-full mx-auto pb-1 px-4 md:pb-4 md:px-20">
                        <div className="box-border caret-transparent">
                          <p className="box-border caret-transparent mb-4">
                            <sup className="relative text-[10.5px] box-border caret-transparent leading-[0px] top-[-5.25px]">
                              2
                            </sup>
                            tastyfx does not charge commissions except on Zero+
                            accounts. tastyfx is compensated through a hedging
                            arrangement with IG Markets Ltd.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="box-border caret-transparent">
                  <div className="font-light box-border caret-transparent">
                    <div className="box-border caret-transparent">
                      <div className="relative text-neutral-500 text-sm font-normal box-border caret-transparent leading-[21px] max-w-screen-xl w-full mx-auto pb-1 px-4 md:pb-4 md:px-20">
                        <div className="box-border caret-transparent">
                          <p className="box-border caret-transparent mb-4">
                            <sup className="relative text-[10.5px] box-border caret-transparent leading-[0px] top-[-5.25px]">
                              3
                            </sup>
                            Average execution speed rounded to the nearest
                            millisecond and calculated using a 3-month average
                            ending 09/30/2025.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent">
        <div className="fixed bg-black/50 box-border caret-transparent hidden h-full w-full z-[2147483646] overflow-hidden left-0 inset-y-0"></div>
        <CookieBanner />
        <CookiePreferenceModal />
      </div>
      <div className="box-border caret-transparent">
        <div className="caret-transparent"></div>
      </div>
      <div className="fixed box-border caret-transparent h-0 w-0 z-[2147483001] font-system_ui">
        <ChatWidget />
      </div>
      <img className="aspect-[auto_1_/_1] box-border caret-transparent hidden h-px w-px" />
      <img className="aspect-[auto_1_/_1] box-border caret-transparent hidden h-px w-px" />
      <img
        src="https://sp.analytics.yahoo.com/sp.pl?a=10000&d=Sun%2C%2001%20Mar%202026%2018%3A01%3A45%20GMT&n=-6&b=tastyfx%20US%20Forex%20Broker%3A%20Trade%20Forex%20Online&.yp=10204745&f=https%3A%2F%2Fwww.tastyfx.com%2F&e=https%3A%2F%2Fwww.google.com%2F&enc=UTF-8&yv=1.16.6&et=custom&tagmgr=gtm"
        alt="dot image pixel"
        className="box-border caret-transparent hidden"
      />
      <div className="box-border caret-transparent"></div>
    </body>
  );
};
