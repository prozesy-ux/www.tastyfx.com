export const FooterNav = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] col-end-[span_1] col-start-[span_1] grid-cols-[1fr] grid-rows-[auto] gap-y-8 md:gap-x-8 md:grid-cols-[1fr_1fr_0.5fr_auto]">
      <img
        alt="tastyfx logo"
        src="https://images.contentstack.io/v3/assets/bltc23b87e0fef43b66/blt8c1b09e0f3218cf6/65f4a3aef4a4cf64b114eb3f/tfx-logo.svg"
        className="box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] max-w-full w-32 mb-2 md:col-end-[span_2] md:col-start-[span_2] md:mb-0"
      />
      <a
        href="https://www.ig.com/us/tastyfx/login"
        className="text-white text-[14.4px] font-semibold items-center self-center box-border caret-transparent block justify-self-stretch leading-[21.6px] text-center uppercase text-nowrap border px-6 py-[7.2px] rounded-[80px] border-solid border-white hover:text-black hover:bg-white"
      >
        Log In
      </a>
      <a
        href="https://www.ig.com/us/tastyfx/application-form#undefined"
        className="text-white text-[14.4px] font-semibold items-center self-center bg-red-600 box-border caret-transparent block col-start-[span_1] row-start-[span_1] justify-self-stretch leading-[21.6px] text-center uppercase text-nowrap border border-red-600 px-6 py-[7.2px] rounded-[80px] border-solid md:col-start-auto md:row-start-auto hover:bg-red-600/80 hover:border-red-600/80"
      >
        Create live account
      </a>
    </div>
  );
};
