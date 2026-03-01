export const ChatWidget = () => {
  return (
    <div
      role="button"
      aria-label="Open Intercom Messenger"
      className="fixed bg-red-600 shadow-[rgba(0,0,0,0.06)_0px_1px_6px_0px,rgba(0,0,0,0.16)_0px_2px_32px_0px] caret-transparent h-12 max-h-12 max-w-12 w-12 z-[2147483003] rounded-[50%] right-5 bottom-5"
    >
      <div className="absolute items-center box-border caret-transparent flex h-12 justify-center w-12 left-0 top-0">
        <img
          src="https://downloads.intercomcdn.eu/i/o/f20taohh/27203/41e7b9bb3e795664389cbcce37ce/b41d0a2de0f1df6269af1b3a17c58959.png"
          alt=""
          className="box-border caret-transparent max-h-6 max-w-6"
        />
      </div>
    </div>
  );
};
