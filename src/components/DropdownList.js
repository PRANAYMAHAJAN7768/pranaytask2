import FormFAQ from "./FormFAQ";

const DropdownList = () => {
  return (
    <section className="self-stretch [background:linear-gradient(180deg,_#000,_rgba(93,_44,_168,_0.85)_57.83%,_#000)] flex flex-col items-end justify-start pt-[68px] pb-[182px] pr-[62px] pl-[46px] box-border gap-[145px] max-w-full text-center text-35xl text-white font-body-small-tag lg:pt-11 lg:pb-[118px] lg:box-border mq450:gap-[36px] mq450:pt-5 mq450:pb-[50px] mq450:box-border mq750:gap-[72px] mq750:pt-11 mq750:pb-[118px] mq750:pr-[31px] mq750:pl-[23px] mq750:box-border mq1050:pt-[29px] mq1050:pb-[77px] mq1050:box-border">
      <div className="w-[1200px] h-[1754px] relative [background:linear-gradient(180deg,_#000,_rgba(93,_44,_168,_0.85)_57.83%,_#000)] hidden max-w-full" />
      <div className="self-stretch flex flex-col items-center justify-center gap-[60px] max-w-full z-[1] lg:gap-[30px]">
        <div className="w-[540px] flex flex-col items-center justify-start max-w-full">
          <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[62px] font-bold font-inherit mq450:text-13xl mq450:leading-[36px] mq1050:text-24xl mq1050:leading-[48px]">
              Intuitive interface
            </h1>
            <h3 className="m-0 self-stretch relative text-3xl tracking-[-0.04em] leading-[31px] font-normal font-body-bold mq450:text-lg mq450:leading-[25px]">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes, one task at a time.
            </h3>
          </div>
        </div>
        <div className="self-stretch h-[678px] relative shrink-0 flex items-center justify-center">
          <img
            className="self-stretch h-full max-w-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[4px] w-full [transform:scale(1.071)]"
            loading="lazy"
            alt=""
            src="/app-night@2x.png"
          />
        </div>
      </div>
      <div className="w-[11077px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[675px] flex flex-col items-end justify-start gap-[47px] max-w-full mq750:gap-[23px]">
          <div className="flex flex-row items-start justify-end py-0 pr-[9px] pl-4">
            <h1 className=" m-0 w-[650px] relative text-inherit tracking-[-0.06em] leading-[60px] font-bold font-inherit inline-block z-[1] mq450:text-13xl mq450:leading-[36px] mq1050:text-24xl mq1050:leading-[48px] hover:text-silver">
              Frequently asked questions
            </h1>
          </div>
          <div className="self-stretch h-[339px] flex flex-col items-start justify-start pt-0 px-px pb-[84.7px] box-border max-w-full z-[1] text-left text-lg mq450:pb-[55px] mq450:box-border mq750:h-auto ">
            <FormFAQ />
            <div className="self-stretch flex flex-col items-start justify-start shrink-0 [debug_commit:f6aba90] max-w-full ">
              <FormFAQ propMarginTop="unset" />
              <FormFAQ propMarginTop="-0.1px" />
            </div>
            <FormFAQ propMarginTop="unset" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DropdownList;
