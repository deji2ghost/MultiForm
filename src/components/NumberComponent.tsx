import mobileSideBar from "../../public/bg-sidebar-mobile.svg"
import desktopSideBar from "../../public/bg-sidebar-desktop.svg"
interface NumberComponentProps{
  number: number
}
const NumberComponent = ({number}: NumberComponentProps) => {
  return (
    <div className="relative w-full lg:w-[34%] h-full">
      <div className="w-full lg:hidden">
        <img className="w-full visible lg:hidden" src={mobileSideBar} alt="" />
      </div>
      <div className="w-full lg:flex hidden">
        <img className="w-full" src={desktopSideBar} alt="" />
      </div>
      <div className="absolute lg:px-6 flex lg:flex-col items-center gap-5 justify-center lg:items-start left-0 right-0 top-3">
        <div className="lg:flex lg:items-center">
          <h1 className={` ${number === 1 ? "text-MarineBlue bg-PastelBlue" : "text-Magnolia bg-transparent"} border border-Magnolia text-center w-7 h-7 rounded-full`}>1</h1>
          <div className="hidden lg:block">
            <p>STEP 1</p>
            <p>YOUR INFO</p>
          </div>
        </div>
        <div className="lg:flex lg:items-center">
          <h1 className={` ${number === 2 ? "text-MarineBlue bg-PastelBlue" : "text-Magnolia bg-transparent"} border border-Magnolia text-center w-7 h-7 rounded-full`}>2</h1>
          <div className="hidden lg:block">
            <p>STEP 2</p>
            <p>SELECT PLANS</p>
          </div>
        </div>
        <div className="lg:flex lg:items-center">
          <h1 className={` ${number === 3 ? "text-MarineBlue bg-PastelBlue" : "text-Magnolia bg-transparent"} border border-Magnolia text-center w-7 h-7 rounded-full`}>3</h1>
          <div className="hidden lg:block">
            <p>STEP 3</p>
            <p>ADD-ONS</p>
          </div>
        </div>
        <div className="lg:flex lg:items-center">
          <h1 className={` ${number === 4 ? "text-MarineBlue bg-PastelBlue" : "text-Magnolia bg-transparent"} border border-Magnolia text-center w-7 h-7 rounded-full`}>4</h1>
          <div className="hidden lg:block">
            <p>STEP 4</p>
            <p>SUMMARY</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NumberComponent
