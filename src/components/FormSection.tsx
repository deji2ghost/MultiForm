import { useState } from "react"
import HeroSection from "./HeroSection"
import NumberComponent from "./NumberComponent"
import Button from "./ui/button/button"

const FormSection = () => {
    const [ numbers, setNumbers ] = useState(1)

    const handleNextButtonClick = () => {
        console.log("next")
        const newPage = numbers + 1
        setNumbers(newPage)
    }

    const handleBackButtonClick = () => {
        console.log("prev")
        const newPage = numbers - 1
        setNumbers(newPage)
    }

  return (
    <div className="relative lg:w-[80%] bg-PastelBlue mx-auto flex flex-col justify-between min-h-screen">
      <NumberComponent />
      <HeroSection numbers={numbers}/>
      <div className="flex items-center justify-between bg-white py-[10px] px-2">
        <Button disabled={numbers === 1} text="Go Back" handleClick={handleBackButtonClick} />
        <Button disabled={numbers === 4} text="Next" handleClick={handleNextButtonClick} />
      </div>
    </div>
  )
}

export default FormSection
