const FooterS = () => {
  return (
    <footer className="self-stretch flex flex-row items-start justify-between py-5 pr-[30px] pl-10 gap-[20px] text-center text-sm text-gray-100 font-body-small-tag border-t-[1px] border-solid border-gray-800 mq750:flex-wrap">
      <div className="w-[299px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
        <div className="self-stretch relative">
          @ 2024 Your Company, Inc. All rights reserved
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[11px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]  hover:filter hover:grayscale hover:brightness-75 transition duration-300"
          loading="lazy"
          alt=""
          src="/socials.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]  hover:filter hover:grayscale hover:brightness-75 transition duration-300"
          loading="lazy"
          alt=""
          src="/socials-1.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]  hover:filter hover:grayscale hover:brightness-75 transition duration-300"
          loading="lazy"
          alt=""
          src="/socials-2.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]  hover:filter hover:grayscale hover:brightness-75 transition duration-300"
          loading="lazy"
          alt=""
          src="/socials-3.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]  hover:filter hover:grayscale hover:brightness-75 transition duration-300"
          loading="lazy"
          alt=""
          src="/socials-4.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]  hover:filter hover:grayscale hover:brightness-75 transition duration-300"
          loading="lazy"
          alt=""
          src="/socials-5.svg"
        />
      </div>
    </footer>
  );
};

export default FooterS;
