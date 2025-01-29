import { useState } from "react"
import HeroSection from "./HeroSection"
import NumberComponent from "./NumberComponent"
import Button from "./ui/button/button"

const FormSection = () => {
    const [ numbers, setNumbers ] = useState(1)

    const handleNextButtonClick = () => {
        // console.log("next")
        const newPage = numbers + 1
        setNumbers(newPage)
    }

    const handleBackButtonClick = () => {
        // console.log("prev")
        const newPage = numbers - 1
        setNumbers(newPage)
    }

  return (
    <div className="relative lg:w-[65%] lg:bg-white lg:p-[12px] rounded-md bg-LightBlue mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-center justify-between min-h-screen lg:min-h-0 lg:h-[565px] lg:absolute lg:mx-auto left-0 right-0 lg:top-1/2 lg:-translate-y-1/2">
        <NumberComponent number={numbers} />
        <div className="lg:flex lg:flex-col lg:justify-between lg:w-full lg:bg-white lg:px-24 h-full">
          <HeroSection numbers={numbers}/>
          <div className="flex items-center justify-between bg-white py-[10px] px-6 md:px-11 lg:px-0">
            <Button disabled={numbers === 1} text="Go Back" handleClick={handleBackButtonClick} />
            <Button disabled={numbers === 4} text="Next" handleClick={handleNextButtonClick} />
          </div>
        </div>
    </div>
  )
}

export default FormSection
