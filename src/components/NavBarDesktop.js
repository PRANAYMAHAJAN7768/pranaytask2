import React, { useState, useEffect } from 'react';

const NavBarDesktop = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setShowMobileNav(false); // Close mobile nav when screen size changes
  }, [windowWidth]);

  return (
    <header className="self-stretch bg-gray-600 [backdrop-filter:blur(14px)] flex flex-row items-center justify-between py-5 px-[15.5px] box-border top-[0] z-[99] sticky gap-[20px] max-w-full text-left text-sm text-white font-body-bold">
      <div className="flex flex-row items-center justify-center py-0 px-5 gap-[8px]">
        <div className="h-[41px] w-10 relative">
          <div className="absolute h-[80.49%] w-full top-[14.63%] right-[0%] bottom-[4.88%] left-[0%] [background:linear-gradient(89.43deg,_#f87bff,_#fb92cf_24.06%,_#ffdd9b_48.2%,_#c2f0b1_72.84%,_#2fd8fe)] [filter:blur(11px)]" />
          <img
            className="absolute h-[97.56%] w-full top-[0%] right-[0%] bottom-[2.44%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/logosaas@2x.png"
          />
        </div>
        <div className="relative inline-block min-w-[58px] whitespace-nowrap">
          made by
        </div>
        <img
          className="h-[22px] w-[68px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/blackhorizontal-1.svg"
        />
      </div>
      <div className="hidden md:flex flex-row items-center justify-center py-0 px-5 box-border gap-[24px] max-w-full text-base text-gray-500">
        <a href='#' style={{textDecoration: 'none'}} className="text-white h-[23px] w-[45px] relative tracking-[-0.01em] leading-[23px] inline-block hover:text-silver">
          About
        </a>
        <a href='#'style={{textDecoration: 'none'}} className="text-white h-[23px] w-[65px] relative tracking-[-0.01em] leading-[23px] inline-block hover:text-silver">
          Features
          </a>
        <a href='#' style={{textDecoration: 'none'}}className="text-white h-[23px] w-[81px] relative tracking-[-0.01em] leading-[23px] inline-block hover:text-silver">
          Customers
        </a>
        <a href='#' style={{textDecoration: 'none'}}className="text-white h-[23px] w-[63px] relative tracking-[-0.01em] leading-[23px] inline-block hover:text-silver">
          Updates
        </a>
        <a href='#' style={{textDecoration: 'none'}}className="text-white h-[23px] w-[35px] relative tracking-[-0.01em] leading-[23px] inline-block hover:text-silver">
          Help
        </a>
        <button  className="rounded-3xs bg-white flex flex-row items-center justify-center py-2.5 px-[15px] whitespace-nowrap text-black"><div >
          <div className="relative tracking-[-0.02em] font-medium inline-block min-w-[85px]  hover:text-silver">
            Get for free
          </div>
        </div></button>
      </div>


      
      <div className="flex md:hidden">
     
<button
    onClick={() => setShowMobileNav(!showMobileNav)}
    className="text-white focus:outline-none  bg-transparent text-2xl "
  >
    {showMobileNav ? 'X' : <span>&#9776;</span>}
  </button>


      </div>
      {showMobileNav && (
        <div className="  flex flex-col items-center justify-center gap-2">
        <a href="#about"  style={{textDecoration: 'none'}}  className="text-white  h-[23px] w-[45px] relative tracking-[-0.01em] leading-[23px] inline-block  hover:text-silver">
          About
        </a>
        <a href="#features"  style={{textDecoration: 'none'}} className="text-white  h-[23px] w-[65px] relative tracking-[-0.01em] leading-[23px] inline-block  hover:text-silver">
          Features
        </a>
        <a href="#customers" style={{textDecoration: 'none'}} className="text-white  h-[23px] w-[81px] relative tracking-[-0.01em] leading-[23px] inline-block  hover:text-silver">
          Customers
        </a>
        <a href="#updates"  style={{textDecoration: 'none'}} className="text-white h-[23px] w-[63px] relative tracking-[-0.01em] leading-[23px] inline-block  hover:text-silver">
          Updates
        </a>
        <a href="#help"  style={{textDecoration: 'none'}} className="text-white  h-[23px] w-[35px] relative tracking-[-0.01em] leading-[23px] inline-block  hover:text-silver">
          Help
        </a>
      <button  className="rounded-3xs bg-white flex flex-row items-center justify-center py-2.5 px-[15px] whitespace-nowrap text-black"> <a href="#get-for-free" >
        <div className="text-black relative tracking-[-0.02em] font-medium inline-block min-w-[85px]  hover:text-silver">
            Get for free
          </div>
        </a></button>
      </div>
      
      )}
    </header>
  );
};

export default NavBarDesktop;
