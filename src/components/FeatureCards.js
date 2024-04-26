import { useMemo } from "react";

const FeatureCards = ({ integrationEcosystem, body, propWidth }) => {
  const integrationEcosystemStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (

    <div className="w-[390px] rounded-3xs bg-gray-400 box-border gap-[8px] shrink-0 flex flex-col items-center justify-center py-10 px-[19px] gap-[24px] max-w-full text-center text-lg text-white font-body-small-tag border-[1px] border-solid border-gray-800 hover:text-silver">
    <div className="rounded-3xs bg-white overflow-hidden flex flex-col items-center justify-center p-[18px]">
      <img
        className="w-5 h-5 relative overflow-hidden shrink-0 "
        alt=""
        src="/icons-2.svg"

      />
    </div>
    <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
      <b
        className="w-[688px] relative tracking-[-0.03em] leading-[24px] inline-block"
        style={integrationEcosystemStyle}
      >
        {integrationEcosystem}
      </b>
      <div className=" self-stretch relative text-base tracking-[-0.01em] leading-[23px] font-body-bold">
        {body}
      </div>
    </div>    

  </div>

  
);
};

    
    
export default FeatureCards;
