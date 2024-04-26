const FrameComponent1 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[164px] pr-[21px] pl-5 box-border max-w-full text-left text-sm text-gray-200 font-body-bold">
      <div className="w-[1023.1px] flex flex-col items-start justify-start gap-[38px] max-w-full mq750:gap-[19px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="relative">
            Trusted by the world’s most innovative teams
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-between gap-[20px] mq1050:justify-center">
          <img
            className="self-stretch w-[146.4px] relative max-h-full object-cover min-h-[32px]"
            loading="lazy"
            alt=""
            src="/acme-1@2x.png"
          />
          <img
            className="self-stretch w-[125.1px] relative max-h-full object-cover min-h-[32px]"
            loading="lazy"
            alt=""
            src="/quantum-1@2x.png"
          />
          <div className="w-40 flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0 box-border">
            <img
              className="self-stretch h-[28.1px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/echo-1@2x.png"
            />
          </div>
          <div className="w-[115.4px] flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0 box-border">
            <img
              className="self-stretch h-[28.1px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/celestia-1@2x.png"
            />
          </div>
          <div className="w-[100.8px] flex flex-col items-start justify-start pt-[4.8px] px-0 pb-0 box-border">
            <img
              className="self-stretch h-[22.3px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/pulse-1@2x.png"
            />
          </div>
          <div className="w-[85.3px] flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0 box-border">
            <img
              className="self-stretch h-[27.2px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/apex-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
