import { inputTypesProps } from "./inputTypes"

const Input = ({type, placeholder, value, onChange, label, name, checked, id}: inputTypesProps) => {
  return (
    <div className="flex flex-col">
      { label && <label className="text-[14px]" htmlFor={name}>{label}</label>}
      <input className="border-2 p-1 outline-none border-PastelBlue focus:border-MarineBlue rounded-md" type={type} name={name} id={id} placeholder={placeholder} value={value} checked={checked} onChange={onChange}/>
    </div>
  )
}

export default Input
