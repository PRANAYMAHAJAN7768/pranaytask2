import { useMemo } from "react";

const FormFAQ = ({ propMarginTop }) => {
  const formFAQStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (


<div
      className=" self-stretch flex flex-row flex-wrap items-start justify-center py-[30px] px-0 shrink-0 [debug_commit:f6aba90] text-left text-lg text-white font-body-small-tag border-b-[1px] border-solid border-gray-800"
      style={formFAQStyle}
    >
      <b className="flex-1 relative tracking-[-0.03em] inline-block min-w-[237px] shrink-0 [debug_commit:f6aba90] hover:text-silver">
        How does the pricing work for teams
      </b>
      <div className=" overflow-hidden flex flex-row items-center justify-end p-[3px] shrink-0 [debug_commit:f6aba90]">
        <img
          className="  flex cursor-pointer    h-[18.8px] w-[18.8px] relative"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
    </div>
  );
};



    
export default FormFAQ;
