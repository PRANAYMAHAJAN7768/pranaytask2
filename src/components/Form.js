const Form = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[15px] box-border max-w-full text-center text-35xl text-white font-body-small-tag md:flex-row md:items-start md:justify-start">
      <div className="flex-1 flex flex-col items-start justify-start py-[132px] px-[330px] box-border relative gap-[10px]  sm:pl-5 sm:pr-5 sm:box-border md:py-[86px] md:px-[165px] md:box-border">
        <div className="self-stretch flex flex-col items-center justify-start max-w-full gap-[40px] md:gap-[20px]"> 
          <div className="self-stretch flex flex-col items-center justify-start gap-[20px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[60px] font-bold font-inherit sm:text-13xl sm:leading-[36px] md:text-24xl md:leading-[48px]">
              Get instant access
            </h1>
            <div className="w-[447px] relative text-base tracking-[-0.01em] leading-[23px] font-body-bold text-silver inline-block max-w-full">
              Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
            </div>
          </div>
        
    


          <div className=" flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full text-left text-base text-gray-700 font-body-bold">
  <input
    type="text"
    placeholder="name@email.com" 
    className="flex-1 rounded-3xs bg-gray-800 overflow-hidden flex flex-row items-center justify-start py-[11.5px] px-3 box-border min-w-[132px] "
    style={{ backgroundColor: 'white'  }}
    onMouseOver={(e) => e.target.style.backgroundColor = 'silver'}
    onMouseOut={(e) => e.target.style.backgroundColor = ''}
/>
        
<button className="rounded-3xs"> <div className="rounded-3xs bg-white flex flex-row items-center justify-center py-2.5 px-[15px] whitespace-nowrap text-black">
     <div className="relative tracking-[-0.02em] font-medium inline-block min-w-[83px] hover:text-silver">
             Get access
              </div>
            </div></button>
        </div>
          </div> 
       

        <img
          className="w-[263px] h-[263px] absolute !m-[] top-[5px] left-[49px] right-[39px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/emojistar-1@2x.png"
        />
        <img
          className="w-[268.5px] h-[268.5px] absolute !m-[] bottom-[43.3px] right-[46.3px]  object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/helix2-1@2x.png"
        />

      </div>
    </section>
  );
};

export default Form;
