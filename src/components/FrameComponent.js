import FeatureCards from "./FeatureCards";



const FrameComponent = () => {
  return (
    <section className="flex flex-row items-start justify-start pt-0 px-11 pb-[145px] box-border max-w-full text-center text-35xl text-white font-body-small-tag mq750:pl-[22px] mq750:pr-[22px] mq750:pb-[94px] mq750:box-border">
      <div className="flex flex-col items-center justify-start gap-[66px] max-w-full lg:gap-[33px] mq750:gap-[16px]">
        <div className="w-[1540px] flex flex-col items-center justify-start max-w-full">
          <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
            <h1 className=" m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[62px] font-bold font-inherit mq450:text-13xl mq450:leading-[36px] mq1050:text-24xl mq1050:leading-[48px]">
              Everything you need
            </h1>


            <h3 className="m-0 self-stretch relative text-3xl tracking-[-0.04em] leading-[31px] font-normal font-body-bold mq450:text-lg mq450:leading-[25px]">
              Enjoy customizable lists, team work tools, and smart
              <br/>
              tracking all in one place. Set tasks, get reminders, and
              <br/>
               see your progress simply and quickly.
            </h3> 
        
          </div>
         </div>
       
  <div className="flex flex-wrap justify-center  -mx-4   ">
      <div className="p-4 pr-2 md:w-3/3">
  <FeatureCards
    integrationEcosystem="Integration ecosystem"
    body="Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."
    propWidth="100%"
  /> </div>

<div className="p-4 md:w-3/3">
  <FeatureCards
    integrationEcosystem="Goal setting and tracking"
    body="Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
    propWidth="100%"
  /></div>

<div className="p-4 pl-2 md:w-3/3">
  <FeatureCards
    integrationEcosystem="Secure data encryption"
    body="With end-to-end encryption, your data is securely stored and protected from unauthorized access."
    propWidth="100%"
  /></div>

</div>


      </div>
    </section>
  );
};

export default FrameComponent;
