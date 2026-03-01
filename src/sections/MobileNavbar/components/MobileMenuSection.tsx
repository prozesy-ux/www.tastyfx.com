export type MobileMenuSectionProps = {
  title: string;
  iconSrc: string;
  links: Array<{
    href: string;
    text: string;
    isSubMenu?: boolean;
    subMenuTitle?: string;
    subMenuIconSrc?: string;
    subLinks?: Array<{
      href: string;
      text: string;
    }>;
  }>;
};

export const MobileMenuSection = (props: MobileMenuSectionProps) => {
  return (
    <div className="box-border caret-transparent mb-2">
      <button className="text-stone-900 font-semibold items-center bg-transparent caret-transparent flex h-14 justify-between text-left w-full px-4 py-0 hover:text-red-600 hover:bg-neutral-100 hover:border-red-600">
        {props.title}
        <img
          src={props.iconSrc}
          alt="Icon"
          className="text-xs caret-transparent h-3 leading-[18px]"
        />
      </button>
      <div className="box-border caret-transparent hidden">
        <div className="relative bg-neutral-100 box-border caret-transparent flex flex-col break-words rounded-b-lg">
          {props.links.map((link, index) =>
            link.isSubMenu ? (
              <div
                key={index}
                className="box-border caret-transparent break-words mt-4"
              >
                <button className="text-stone-900 items-center bg-transparent caret-transparent flex h-14 justify-between break-words text-left w-full pl-8 pr-4 py-2 hover:bg-zinc-100">
                  {link.subMenuTitle}
                  <img
                    src={link.subMenuIconSrc}
                    alt="Icon"
                    className="text-xs caret-transparent h-3 leading-[18px]"
                  />
                </button>
                <div className="box-border caret-transparent hidden break-words">
                  <div className="relative bg-zinc-100 box-border caret-transparent flex flex-col break-words rounded-b-lg">
                    {link.subLinks?.map((subLink, subIndex) => (
                      <a
                        key={subIndex}
                        href={subLink.href}
                        className="text-stone-900 items-center box-border caret-transparent flex h-14 break-words mt-4 pl-12 pr-6 py-2 hover:text-red-600 hover:bg-neutral-200 hover:border-red-600"
                      >
                        {subLink.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={index}
                href={link.href}
                className="text-stone-900 items-center box-border caret-transparent flex h-14 break-words mt-4 pl-8 pr-6 py-2 hover:text-red-600 hover:bg-zinc-100 hover:border-red-600"
              >
                {link.text}
              </a>
            ),
          )}
        </div>
      </div>
    </div>
  );
};
