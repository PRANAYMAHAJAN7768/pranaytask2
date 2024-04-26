import NavBarDesktop from "../components/NavBarDesktop";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import DropdownList from "../components/DropdownList";
import Form from "../components/Form";
import FooterS from "../components/FooterS";

const Desktop = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border leading-[normal] tracking-[normal] text-left text-sm text-black font-body-small-tag">
      <div className="self-stretch [background:linear-gradient(90deg,_#feecff,_#fecaff_11.71%,_#feb5ff_26.8%,_#ffdbe7_40.18%,_#fff4d6_49.22%,_#f3fcd7_58.71%,_#d2f5ee_71.29%,_#c3efff_84.44%,_#fbefff)] flex flex-row items-center justify-center py-3.5 px-5 box-border max-w-full">
        <div className="flex flex-row flex-wrap items-center justify-center py-0 px-[4.5px] box-border max-w-full">
          <div className="relative">
            This page is included in a free SaaS Website Kit.
          </div>
          <div className="flex flex-row items-center justify-start gap-[3px]">
            <div className="relative">View the complete Kit</div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/icons.svg"
            />
          </div>
        </div>
      </div>
      <NavBarDesktop />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <DropdownList />
      <Form />
      <FooterS />
    </div>
  );
};

export default Desktop;
