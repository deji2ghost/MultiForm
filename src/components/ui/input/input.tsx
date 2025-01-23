import { inputTypesProps } from "./inputTypes"

const Input = ({type, placeholder, value, onChange, label, name}: inputTypesProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-[14px]" htmlFor={name}>{label}</label>
      <input className="border-2 p-1 outline-none border-PastelBlue focus:border-MarineBlue rounded-md" type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}

export default Input
