import { FooterNav } from "@/sections/Footer/components/FooterNav";
import { FooterColumns } from "@/sections/Footer/components/FooterColumns";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <footer className="relative bg-stone-900 box-border caret-transparent z-[2] py-8 md:pt-20 md:pb-24">
      <div className="relative box-border caret-transparent w-full px-4 md:px-20">
        <FooterNav />
        <hr className="border-b-neutral-800 border-l-neutral-800 border-r-neutral-800 border-t-gray-400 box-border caret-transparent opacity-25 mt-8 mb-[29.6px] border-b-0 border-x-0" />
        <FooterColumns />
        <div className="text-zinc-500 box-border caret-transparent">
          <hr className="border-b-zinc-500 border-l-zinc-500 border-r-zinc-500 border-t-gray-400 box-border caret-transparent opacity-25 mt-[31.2px] mb-[33.12px] border-b-0 border-x-0" />
          <div className="box-border caret-transparent">
            <div className="text-[14.672px] box-border caret-transparent leading-[22.008px]">
              <p className="text-white/60 text-[11px] box-border caret-transparent leading-[16.5px] mb-4">
                tastyfx, LLC (“tastyfx”) is a Commodity Futures Trading
                Commission (“CFTC”) registered Retail Foreign Exchange Dealer
                (RFED) and Introducing Broker (IB) and Forex Dealer Member (FDM)
                of the National Futures Association (“NFA”) (NFA ID 0509630).
                Any information presented by tastyfx should be construed as
                market commentary, merely observing economic, political, and
                market conditions. Factual information believed to be reliable
                was used to formulate these statements of opinion and the
                accuracy, completeness, adequacy or timeliness of the content is
                not warranted nor guaranteed. This content is made available for
                informational purposes only and should not be construed as a
                solicitation or a recommendation to trade. It is not an offer to
                buy or sell an off-exchange foreign currency contract, exchange
                traded futures contract, option on a futures contract, or
                security
              </p>
              <p className="text-white/60 text-[11px] box-border caret-transparent leading-[16.5px] mb-4">
                Past performance is not necessarily indicative of future
                results. Leveraged trading in foreign currency or off-exchange
                products on margin carries significant risk and may not be
                suitable for all investors. Losses can exceed deposits. We
                advise you to carefully consider whether trading is appropriate
                for you based upon your personal circumstances as you may lose
                more than you invest. The information presented does not take
                into account your particular investment objectives, financial
                situation and/or needs and is not a substitute for obtaining
                professional advice from a qualified person, firm, or
                corporation, where required. You are advised to perform an
                independent investigation of any transaction you intend to
                execute in order to ensure that transaction is suitable for you.
                Information presented by tastyfx should not be construed nor
                interpreted as financial advice.
              </p>
              <p className="text-white/60 text-[11px] box-border caret-transparent leading-[16.5px] mb-4">
                tastyfx is not a registered broker-dealer with the Securities
                and Exchange Commission (SEC), a member of the Financial
                Industry Regulatory Authority (FINRA), or a member of the
                Securities Investor Protection Corporation (SIPC).
              </p>
              <p className="text-white/60 text-[11px] box-border caret-transparent leading-[16.5px] mb-4">
                tastyfx is an affiliate company of tastytrade, Inc. and
                tastylive, Inc. through common ownership of IG US Holdings, Inc.
                tastyfx, tastytrade, Inc., and tastylive, Inc. are separate
                legal entities that are not responsible for each other’s
                products, services, or policies.
              </p>
            </div>
            <hr className="border-b-zinc-500 border-l-zinc-500 border-r-zinc-500 border-t-gray-400 box-border caret-transparent opacity-25 my-8 border-b-0 border-x-0" />
            <FooterCopyright />
          </div>
        </div>
      </div>
    </footer>
  );
};
