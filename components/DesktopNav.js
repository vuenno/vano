import React from "react";
import Buttons from "./Buttons";

function DesktopNav() {
  return (
    <>
      <h4 className="font-bold text-black text-[15px] tracking-widest absolute left-3.5 top-[1.3%] hidden lg:block">
        VUENNO
      </h4>
      <div className="w-1/2 h-full justify-evenly items-center hidden lg:flex">
        <Buttons />
      </div>
    </>
  );
}

export default DesktopNav;
