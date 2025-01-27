import mobileSideBar from "../../public/bg-sidebar-mobile.svg"
import desktopSideBar from "../../public/bg-sidebar-desktop.svg"
const NumberComponent = () => {
  return (
    <div className="relative w-full lg:w-[34%] h-full">
      <div className="w-full lg:hidden">
        <img className="w-full visible lg:hidden" src={mobileSideBar} alt="" />
      </div>
      <div className="w-full lg:flex hidden">
        <img className="w-full" src={desktopSideBar} alt="" />
      </div>
      <div className="absolute flex lg:flex-col items-center gap-5 justify-center left-0 right-0 top-3">
        <h1 className="border text-center w-7 h-7 rounded-full">1</h1>
        <h1 className="border text-center w-7 h-7 rounded-full">2</h1>
        <h1 className="border text-center w-7 h-7 rounded-full">3</h1>
        <h1 className="border text-center w-7 h-7 rounded-full">4</h1>
      </div>
    </div>
  )
}

export default NumberComponent
