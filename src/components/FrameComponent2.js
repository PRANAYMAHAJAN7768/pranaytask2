const FrameComponent2 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full text-left text-smi text-white font-body-bold">
      <div className="flex-1 [background:linear-gradient(180deg,_#000,_#200d42_34.22%,_#4f21a1_64.9%,_#a46edb_81.78%)] overflow-hidden flex flex-col items-start justify-start pt-[64.5px] px-[279px] pb-[147px] box-border relative min-h-[731px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pt-[42px] mq750:px-[139px] mq750:pb-24 mq750:box-border">
        <div className="w-[1200px] h-[730px] relative [background:linear-gradient(180deg,_#000,_#200d42_34.22%,_#4f21a1_64.9%,_#a46edb_81.78%)] hidden max-w-full z-[0]" />
        <div className="w-[2344px] h-[1014px] absolute !m-[0] right-[-588px] bottom-[-839px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#000_82.2%,_#9560eb)] box-border z-[1] border-[0px] border-solid border-plum" />
        <div className="self-stretch flex flex-col items-center justify-center relative gap-[32px] max-w-full z-[2] mq750:gap-[16px]">
          <div className="rounded-3xs overflow-hidden flex flex-row items-center justify-center py-0 px-3 text-gray-700 border-[1px] border-solid border-gray-300">
            <div className="flex flex-row items-center justify-center">
              <div className="relative tracking-[-0.02em] leading-[11px] font-medium inline-block min-w-[117px]">
                Version 2.0 is here
              </div>
              <div className="flex flex-row items-center justify-center gap-[4px] text-white">
                <a href="#" style={{ textDecoration: 'none' }} className=" text-white relative tracking-[-0.02em] leading-[31px] font-medium inline-block min-w-[66px] hover:text-silver">
             Read more
                </a>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icons-1.svg"
                />
              </div>
            </div>
          </div>
          <h1 className="m-0 self-stretch relative text-146xl tracking-[-0.07em] leading-[125px] font-bold font-body-small-tag text-center mq450:text-22xl mq450:leading-[50px] mq1050:text-47xl mq1050:leading-[75px]">
            <p className="m-0">One Task
            </p>
            <p className="m-0">at a Time</p>
          </h1>
          <p className="m-0 w-[490px] relative text-3xl tracking-[-0.04em] leading-[31px] font-normal font-inherit text-center inline-block max-w-full mq450:text-lg mq450:leading-[25px]">
            Celebrate the joy of accomplishment with an app
   
             designed to track your progress, motivate
        
             your efforts, and celebrate your successes.
          </p>
         <button className="rounded-3xs bg-white flex flex-row items-center justify-center py-[15px] px-5 whitespace-nowrap text-base text-black"> <div >
            <div className="relative tracking-[-0.02em] font-medium inline-block min-w-[85px]  hover:text-silver">
              Get for free
            </div>
          </div></button>
          <div className="hidden md:block w-[201px] h-[203px] w-[201px] h-[203px] absolute !m-[0] bottom-[129.5px] left-[-143px]">
            <div className="absolute top-[0px] left-[1px] w-full h-full z-[3] flex items-left justify-center">
              <img
                className="w-full h-full z-[3] object-contain absolute left-[0px] top-[0px] [transform:scale(1.14)]"
                loading="lazy"
                alt=""
                src="/cursor-1@2x.png"
              />
            </div>
            <img
              className="absolute top-[3px] left-[0px] w-full h-full object-cover z-[4]"
              alt=""
              src="/cursor-2@2x.png"
            />
          </div>
          <div className="hidden md:block w-[201px] h-[203px] w-[200px] h-[206px] absolute !m-[0] top-[109.5px] right-[-162px]">
            <div className="absolute top-[6px] left-[0px] w-[200px] h-[200px] z-[3] flex items-center justify-center">
              <img
                className="w-full h-full z-[3] object-contain absolute left-[0px] top-[0px] [transform:scale(1.14)]"
                alt=""
                src="/message-2@2x.png"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[200px] h-[200px] object-cover z-[4]"
              loading="lazy"
              alt=""
              src="/message-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
