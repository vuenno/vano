import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Nav() {
  return (
    <>
      <div className="w-full h-[60px] flex justify-center items-center">
        <img src="/logo.png" className="w-[50px] h-[30px] lg:hidden" />
        {/* mobile layout */}
        <MobileNav />
        {/* Desktop Layout */}
        <DesktopNav />
      </div>
    </>
  );
}

export default Nav;
