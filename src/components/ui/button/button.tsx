import { ButtonProps } from "./buttonPropsTypes"

const Button = ({ text, handleClick, disabled }: ButtonProps) => {
  return (
    <button disabled={disabled} onClick={handleClick} className="p-2 w-[25%] rounded-md bg-MarineBlue text-white">
      { text }
    </button>
  )
}

export default Button
