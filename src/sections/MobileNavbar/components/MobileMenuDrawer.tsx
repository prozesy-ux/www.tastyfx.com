import { MobileMenuSection } from "@/sections/MobileNavbar/components/MobileMenuSection";

export const MobileMenuDrawer = () => {
  return (
    <div className="fixed bg-white box-border caret-transparent block h-[calc(100%_-_56px)] overscroll-x-contain overscroll-y-contain translate-x-[-100.0%] w-[337.5px] z-[11] overflow-auto p-4 left-0 top-[60.8px] md:hidden md:transform-none md:w-[1152px]">
      <div className="box-border caret-transparent w-full mb-6">
        <MobileMenuSection
          title="Why tastyfx"
          iconSrc="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-9.svg"
          links={[
            {
              href: "https://www.tastyfx.com/why-tastyfx/",
              text: "Why tastyfx",
            },
            {
              href: "https://www.tastyfx.com/why-tastyfx/promotions/",
              text: "Promotions",
            },
            {
              href: "https://www.tastyfx.com/why-tastyfx/about-us/",
              text: "About Us",
            },
            {
              href: "https://www.tastyfx.com/why-tastyfx/how-we-support-you/",
              text: "How We Support You",
            },
            {
              href: "https://www.tastyfx.com/why-tastyfx/execution-dashboard/",
              text: "Execution Dashboard",
            },
          ]}
        />
        <MobileMenuSection
          title="Markets"
          iconSrc="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-9.svg"
          links={[
            { href: "https://www.tastyfx.com/markets/", text: "Markets" },
            {
              href: "https://www.tastyfx.com/markets/forex-trading/",
              text: "Forex Trading",
            },
            {
              href: "https://www.tastyfx.com/markets/forex-prices/",
              text: "Forex Prices",
            },
            {
              href: "https://www.tastyfx.com/markets/mini-contracts/",
              text: "Mini Contracts",
            },
            {
              href: "https://www.tastyfx.com/markets/overnight-funding-rates/",
              text: "Overnight Funding Rates",
            },
          ]}
        />
        <MobileMenuSection
          title="Accounts"
          iconSrc="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-9.svg"
          links={[
            { href: "https://www.tastyfx.com/accounts/", text: "Accounts" },
            {
              href: "https://www.tastyfx.com/accounts/pricing/",
              text: "Pricing",
            },
            {
              href: "https://www.tastyfx.com/accounts/standard/",
              text: "Standard Account",
            },
            {
              href: "https://www.tastyfx.com/accounts/zero/",
              text: "Zero+ Account",
            },
            {
              href: "https://www.tastyfx.com/accounts/prime/",
              text: "Prime Account",
            },
            {
              href: "https://www.tastyfx.com/accounts/ira/",
              text: "IRA Accounts",
            },
            {
              href: "https://www.tastyfx.com/accounts/demo-account/",
              text: "Demo Account",
            },
            {
              href: "https://www.tastyfx.com/accounts/forex-rebates/",
              text: "Forex Rebates",
            },
          ]}
        />
        <MobileMenuSection
          title="Platforms"
          iconSrc="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-9.svg"
          links={[
            { href: "https://www.tastyfx.com/platforms/", text: "Platforms" },
            {
              href: "https://www.tastyfx.com/platforms/mobile-app/",
              text: "tastyfx Mobile App",
            },
            {
              isSubMenu: true,
              subMenuTitle: "tastyfx Platforms",
              subMenuIconSrc:
                "https://c.animaapp.com/mm8252ngqkoE47/assets/icon-10.svg",
              subLinks: [
                {
                  href: "https://www.tastyfx.com/platforms/tastyfx-platform/",
                  text: "Our Platform",
                },
                {
                  href: "https://www.tastyfx.com/platforms/tastyfx-platform/automated-trading/",
                  text: "Automated Trading",
                },
                {
                  href: "https://www.tastyfx.com/platforms/tastyfx-platform/charts/",
                  text: "Charts",
                },
                {
                  href: "https://www.tastyfx.com/platforms/tastyfx-platform/trading-alerts/",
                  text: "Trading Alerts",
                },
              ],
            },
            {
              isSubMenu: true,
              subMenuTitle: "MetaTrader 5",
              subMenuIconSrc:
                "https://c.animaapp.com/mm8252ngqkoE47/assets/icon-10.svg",
              subLinks: [
                {
                  href: "https://www.tastyfx.com/platforms/metatrader-5/",
                  text: "MetaTrader 5 (MT5)",
                },
                {
                  href: "https://www.tastyfx.com/platforms/metatrader-5/how-to-trade-with-mt5/",
                  text: "How to Trade with MT5",
                },
                {
                  href: "https://www.tastyfx.com/platforms/metatrader-5/download-mt5/",
                  text: "Download MT5",
                },
                {
                  href: "https://www.tastyfx.com/platforms/metatrader-5/mt5-indicators/",
                  text: "MT5 Indicators",
                },
                {
                  href: "https://www.tastyfx.com/platforms/metatrader-5/mt5-vps/",
                  text: "MT5 VPS",
                },
              ],
            },
            {
              isSubMenu: true,
              subMenuTitle: "MetaTrader 4",
              subMenuIconSrc:
                "https://c.animaapp.com/mm8252ngqkoE47/assets/icon-10.svg",
              subLinks: [
                {
                  href: "https://www.tastyfx.com/platforms/metatrader-4/",
                  text: "MetaTrader 4 (MT4)",
                },
                {
                  href: "https://www.tastyfx.com/platforms/metatrader-4/what-is-mt4-how-to-use-it/",
                  text: "What is MT4?",
                },
                {
                  href: "https://www.tastyfx.com/platforms/metatrader-4/download-mt4/",
                  text: "Download MT4",
                },
                {
                  href: "https://www.tastyfx.com/platforms/metatrader-4/mt4-indicators/",
                  text: "MT4 Indicators",
                },
                {
                  href: "https://www.tastyfx.com/platforms/metatrader-4/mt4-vps/",
                  text: "MT4 VPS",
                },
                {
                  href: "https://www.tastyfx.com/platforms/metatrader-4/mt4-for-mac/",
                  text: "MT4 for Mac",
                },
                {
                  href: "https://www.tastyfx.com/platforms/metatrader-4/mt4-demo-account/",
                  text: "MT4 Demo Account",
                },
              ],
            },
            {
              isSubMenu: true,
              subMenuTitle: "TradingView",
              subMenuIconSrc:
                "https://c.animaapp.com/mm8252ngqkoE47/assets/icon-10.svg",
              subLinks: [
                {
                  href: "https://www.tastyfx.com/platforms/tradingview/what-is-tradingview/",
                  text: "What is TradingView?",
                },
                {
                  href: "https://www.tastyfx.com/platforms/tradingview/how-to-paper-trade-backtest/",
                  text: "Paper Trading and Backtesting",
                },
              ],
            },
            {
              href: "https://www.tastyfx.com/platforms/prorealtime/",
              text: "ProRealTime",
            },
          ]}
        />
        <MobileMenuSection
          title="News"
          iconSrc="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-9.svg"
          links={[
            { href: "https://www.tastyfx.com/news/", text: "All News" },
            {
              href: "https://www.tastyfx.com/news/economic-calendar/",
              text: "Economic Calendar",
            },
            {
              href: "https://www.tastyfx.com/news/all-articles/?Strategy=true",
              text: "Strategy",
            },
            {
              href: "https://www.tastyfx.com/news/all-articles/?Forex=true",
              text: "Forex",
            },
            {
              href: "https://www.tastyfx.com/news/all-articles/?Economics=true",
              text: "Economics",
            },
            {
              href: "https://www.tastyfx.com/news/all-articles/?Related+Markets=true",
              text: "Related Markets",
            },
            {
              href: "https://www.tastyfx.com/news/forex-newsletters/",
              text: "Forex Newsletters",
            },
          ]}
        />
        <MobileMenuSection
          title="Learn"
          iconSrc="https://c.animaapp.com/mm8252ngqkoE47/assets/icon-9.svg"
          links={[
            { href: "https://www.tastyfx.com/learn/", text: "Learn" },
            {
              href: "https://www.tastyfx.com/learn/how-to-trade-forex/",
              text: "How to Trade Forex",
            },
            {
              href: "https://www.tastyfx.com/learn/what-is-forex/",
              text: "What is Forex?",
            },
            {
              href: "https://www.tastyfx.com/learn/why-trade-forex/",
              text: "Why Trade Forex?",
            },
            {
              href: "https://www.tastyfx.com/learn/margin-rates/",
              text: "Margin Rates",
            },
            {
              isSubMenu: true,
              subMenuTitle: "Risk Management",
              subMenuIconSrc:
                "https://c.animaapp.com/mm8252ngqkoE47/assets/icon-10.svg",
              subLinks: [
                {
                  href: "https://www.tastyfx.com/learn/risk-management/",
                  text: "Risk Management",
                },
                {
                  href: "https://www.tastyfx.com/learn/risk-management/what-is-leverage-in-forex/",
                  text: "What is Leverage in Forex?",
                },
                {
                  href: "https://www.tastyfx.com/learn/risk-management/margin-calls/",
                  text: "Margin Calls",
                },
                {
                  href: "https://www.tastyfx.com/learn/risk-management/trade-analytics-tool/",
                  text: "Trade Analytics Tools",
                },
                {
                  href: "https://www.tastyfx.com/learn/risk-management/what-are-limit-orders/",
                  text: "What Are Limit Orders?",
                },
                {
                  href: "https://www.tastyfx.com/learn/risk-management/what-are-stop-orders/",
                  text: "What Are Stop Orders?",
                },
              ],
            },
            {
              isSubMenu: true,
              subMenuTitle: "Forex Need-to-Knows",
              subMenuIconSrc:
                "https://c.animaapp.com/mm8252ngqkoE47/assets/icon-10.svg",
              subLinks: [
                {
                  href: "https://www.tastyfx.com/learn/forex-need-to-knows/",
                  text: "Forex Need-to-Knows",
                },
                {
                  href: "https://www.tastyfx.com/learn/forex-need-to-knows/forex-trading-for-beginners/",
                  text: "Forex Trading For Beginners",
                },
                {
                  href: "https://www.tastyfx.com/learn/forex-need-to-knows/forex-charts-for-beginners/",
                  text: "Forex Chart For Beginners",
                },
                {
                  href: "https://www.tastyfx.com/learn/forex-need-to-knows/what-are-forex-pairs/",
                  text: "What Are Forex Pairs",
                },
              ],
            },
          ]}
        />
        <div className="box-border caret-transparent mb-2">
          <a
            href="https://www.tastyfx.com/accounts/prime/"
            className="text-stone-900 font-semibold items-center box-border caret-transparent flex h-14 mt-4 pl-4 pr-6 py-2 hover:text-red-600 hover:bg-zinc-100 hover:border-red-600"
          >
            Prime
          </a>
        </div>
        <a
          href="https://www.ig.com/us/tastyfx/application-form#undefined"
          className="text-white font-semibold items-center self-center bg-red-600 box-border caret-transparent flex justify-center text-center uppercase text-nowrap border border-red-600 mt-4 px-6 py-3 rounded-[80px] border-solid md:self-auto hover:bg-red-800 hover:border-red-800"
        >
          OPEN A LIVE ACCOUNT
        </a>
      </div>
    </div>
  );
};
