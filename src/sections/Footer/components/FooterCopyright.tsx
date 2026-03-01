export const FooterCopyright = () => {
  return (
    <div className="text-white/60 text-xs font-normal box-border caret-transparent flex flex-col-reverse justify-between leading-[18px] gap-y-8 md:flex-row md:gap-y-[normal]">
      <div className="box-border caret-transparent">© 2024-2026 tastyfx</div>
      <div className="items-start box-border caret-transparent gap-x-2 flex flex-col justify-end gap-y-6 md:items-center md:flex-row md:gap-y-2">
        <span className="box-border caret-transparent block">
          <button className="relative bg-transparent caret-transparent underline mr-[29px] p-0 after:accent-auto after:box-border after:caret-transparent after:text-white/60 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[18px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:right-[-29px] after:text-start after:indent-[0px] after:normal-case after:translate-y-[-7.2px] after:visible after:w-6 after:border-separate after:top-2/4 after:font-worksans_variablefont_wght hover:text-white hover:border-white">
            Your Privacy Choices
          </button>
        </span>
        <span className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
          |
        </span>
        <span className="box-border caret-transparent block">
          <a
            href="https://www.tastyfx.com/terms-and-agreements/"
            className="box-border caret-transparent underline hover:text-white hover:border-white"
          >
            Terms &amp; Agreements
          </a>
        </span>
        <span className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
          |
        </span>
        <span className="box-border caret-transparent block">
          <a
            href="https://www.ig.com/usermanagement/customeragreements?igCompany=igus&agreementType=privacy_access_policies&locale=en_US&legalEntity=IGUS"
            className="box-border caret-transparent underline hover:text-white hover:border-white"
          >
            Privacy Policy
          </a>
        </span>
        <span className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
          |
        </span>
        <span className="box-border caret-transparent block">
          <a
            href="https://www.ig.com/usermanagement/customeragreements?igCompany=igus&agreementType=tastyfx_access_policy&locale=en_US&legalEntity=IGUS"
            className="box-border caret-transparent underline hover:text-white hover:border-white"
          >
            Access Policy
          </a>
        </span>
      </div>
    </div>
  );
};
