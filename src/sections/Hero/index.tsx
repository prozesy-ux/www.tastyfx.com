import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section className="relative text-white font-medium items-center bg-fixed bg-black bg-[url('https://images.contentstack.io/v3/assets/bltc23b87e0fef43b66/blt694ae96e120449c7/682f555e5dce1367b6472e67/HOMEPAGE_Banner_Thumbnail.jpg?format=pjpg&auto=webp&quality=90')] bg-repeat-y bg-cover box-border caret-transparent flex h-auto overflow-hidden bg-center pt-28 md:h-[937.5px] md:pt-0">
      <div className="relative box-border caret-transparent max-w-screen-xl w-full z-[9] mx-auto px-4 md:px-20">
        <div className="box-border caret-transparent pt-0 pb-[72px] md:pt-[200px] md:pb-40">
          <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-8 md:grid-cols-[1fr_1fr]">
            <HeroContent />
            <div className="box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1]"></div>
          </div>
        </div>
      </div>
      <div className="absolute box-border caret-transparent h-full w-full z-[1] inset-[0%]">
        <video
          autoplay=""
          muted=""
          playsinline=""
          poster="https://images.contentstack.io/v3/assets/bltc23b87e0fef43b66/blt694ae96e120449c7/682f555e5dce1367b6472e67/HOMEPAGE_Banner_Thumbnail.jpg?format=pjpg&auto=webp&quality=90"
          className="absolute bg-cover box-border caret-transparent h-full object-cover w-full z-[-100] bg-center m-auto -inset-full"
        >
          <source
            src="https://assets.contentstack.io/v3/assets/bltc23b87e0fef43b66/blt6ec8c4aeb939de40/6765ae56989c53a90cd50963/TT1739_TFX-Tier-00HOMEPAGE_241220_02.mp4"
            type="video/mp4"
            className="text-black font-normal box-border caret-transparent leading-[normal] font-times_new_roman"
          />
        </video>
      </div>
      <div className="absolute backdrop-blur-[5px] box-border caret-transparent h-full opacity-[0.28309] w-full z-[2] inset-[0%]"></div>
      <div className="absolute bg-[linear-gradient(to_top,rgba(29,25,27,0.9)_12%,rgba(27,27,27,0.5))] box-border caret-transparent mix-blend-multiply w-full z-[3] inset-[0%] md:bg-[linear-gradient(to_right,rgb(29,25,27)_40%,rgba(27,27,27,0))]"></div>
    </section>
  );
};
