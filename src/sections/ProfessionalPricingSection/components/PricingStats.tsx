export const PricingStats = () => {
  return (
    <div className="box-border caret-transparent grid auto-cols-[1fr] col-end-[span_2] col-start-[span_2] row-end-[span_1] row-start-[span_1] grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2 grid flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] h-full justify-center gap-y-2 pt-8 pb-6 px-4">
        <div className="relative items-end box-border caret-transparent flex justify-center z-10 font-tusker_grotesk_6500">
          <div className="text-[27.2px] self-end box-border caret-transparent leading-[27.2px] mb-[9.6px] md:text-5xl md:leading-[48px]">
            $
          </div>
          <div className="text-[64px] box-border caret-transparent leading-[70.4px] md:text-8xl md:leading-[105.6px]">
            0
          </div>
          <div className="text-[27.2px] self-end box-border caret-transparent leading-[27.2px] mb-[9.6px] md:text-5xl md:leading-[48px]"></div>
        </div>
        <div className="relative text-xs box-border caret-transparent leading-[15.6px] text-center md:text-sm md:leading-[18.2px]">
          <div className="text-xs box-border caret-transparent leading-[15.6px] md:text-sm md:leading-[18.2px]">
            <p className="text-xs font-medium box-border caret-transparent leading-[15.6px] mb-4 md:text-sm md:leading-[18.2px]">
              commissions (standard)
              <sup className="relative text-[9px] box-border caret-transparent leading-[0px] top-[-4.5px] md:text-[10.5px] md:top-[-5.25px]">
                2
              </sup>
            </p>
          </div>
        </div>
      </div>
      <div className="relative content-center items-center box-border caret-transparent gap-x-2 grid flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] h-full justify-center gap-y-2 pt-8 pb-6 px-4">
        <div className="relative items-end box-border caret-transparent flex justify-center z-10 font-tusker_grotesk_6500">
          <div className="text-[64px] box-border caret-transparent leading-[70.4px] md:text-8xl md:leading-[105.6px]">
            0.
          </div>
          <div className="text-[64px] box-border caret-transparent leading-[70.4px] md:text-8xl md:leading-[105.6px]">
            0
          </div>
          <div className="text-[27.2px] self-end box-border caret-transparent leading-[27.2px] mb-[9.6px] md:text-5xl md:leading-[48px]"></div>
        </div>
        <div className="relative text-xs box-border caret-transparent leading-[15.6px] text-center md:text-sm md:leading-[18.2px]">
          <div className="text-xs box-border caret-transparent leading-[15.6px] md:text-sm md:leading-[18.2px]">
            <p className="text-xs font-medium box-border caret-transparent leading-[15.6px] mb-4 md:text-sm md:leading-[18.2px]">
              pips (Zero+)
            </p>
          </div>
        </div>
      </div>
      <div className="relative content-center items-center box-border caret-transparent gap-x-2 grid flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] h-full justify-center gap-y-2 pt-8 pb-6 px-4">
        <div className="relative items-end box-border caret-transparent flex justify-center z-10 font-tusker_grotesk_6500">
          <div className="text-[27.2px] self-end box-border caret-transparent leading-[27.2px] mb-[9.6px] md:text-5xl md:leading-[48px]"></div>
          <div className="text-[64px] box-border caret-transparent leading-[70.4px] md:text-8xl md:leading-[105.6px]">
            17
          </div>
          <div className="text-[27.2px] self-end box-border caret-transparent leading-[27.2px] mb-[9.6px] md:text-5xl md:leading-[48px]">
            ms
          </div>
        </div>
        <div className="relative text-xs box-border caret-transparent leading-[15.6px] text-center md:text-sm md:leading-[18.2px]">
          <div className="text-xs box-border caret-transparent leading-[15.6px] md:text-sm md:leading-[18.2px]">
            <p className="text-xs font-medium box-border caret-transparent leading-[15.6px] mb-4 md:text-sm md:leading-[18.2px]">
              trade execution (avg.)
              <sup className="relative text-[9px] box-border caret-transparent leading-[0px] top-[-4.5px] md:text-[10.5px] md:top-[-5.25px]">
                3
              </sup>
            </p>
          </div>
        </div>
      </div>
      <div className="relative content-center items-center box-border caret-transparent gap-x-2 grid flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] h-full justify-center gap-y-2 pt-8 pb-6 px-4">
        <div className="relative items-end box-border caret-transparent flex justify-center z-10 font-tusker_grotesk_6500">
          <div className="text-[27.2px] self-end box-border caret-transparent leading-[27.2px] mb-[9.6px] md:text-5xl md:leading-[48px]"></div>
          <div className="text-[64px] box-border caret-transparent leading-[70.4px] md:text-8xl md:leading-[105.6px]">
            2
          </div>
          <div className="text-[27.2px] self-end box-border caret-transparent leading-[27.2px] mb-[9.6px] md:text-5xl md:leading-[48px]">
            %
          </div>
        </div>
        <div className="relative text-xs box-border caret-transparent leading-[15.6px] text-center md:text-sm md:leading-[18.2px]">
          <div className="text-xs box-border caret-transparent leading-[15.6px] md:text-sm md:leading-[18.2px]">
            <p className="text-xs font-medium box-border caret-transparent leading-[15.6px] mb-4 md:text-sm md:leading-[18.2px]">
              min. margin required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
