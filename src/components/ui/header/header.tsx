import { HeaderTypes } from './headertypes'

const Header = ({header, description}: HeaderTypes) => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-[40px] font-bold text-MarineBlue'>{header}</h1>
      <p className='text-[10px] font text-MarineBlue'>{description}</p>
    </div>
  )
}

export default Header
``