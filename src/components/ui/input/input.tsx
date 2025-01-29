import { inputTypesProps } from "./inputTypes"

const Input = ({type, placeholder, value, onChange, label, name, checked, id}: inputTypesProps) => {
  return (
    <div className="flex flex-col">
      { label && <label className="text-[14px] text-MarineBlue" htmlFor={name}>{label}</label>}
      <input className="border outline-none border-LightGray p-2 focus:border-2 focus:border-MarineBlue rounded-md" type={type} name={name} id={id} placeholder={placeholder} value={value} checked={checked} onChange={onChange}/>
    </div>
  )
}

export default Input
