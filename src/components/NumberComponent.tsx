import mobileSideBar from "../../public/bg-sidebar-mobile.svg"
const NumberComponent = () => {
  return (
    <div className="relative w-full">
      <img className="w-full" src={mobileSideBar} alt="" />
      <div className="absolute flex items-center gap-5 justify-center left-0 right-0 top-3">
        <h1 className="border text-center w-7 h-7 rounded-full">1</h1>
        <h1 className="border text-center w-7 h-7 rounded-full">2</h1>
        <h1 className="border text-center w-7 h-7 rounded-full">3</h1>
        <h1 className="border text-center w-7 h-7 rounded-full">4</h1>
      </div>
    </div>
  )
}

export default NumberComponent
