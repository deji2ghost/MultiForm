import { HeaderTypes } from './headertypes'

const Header = ({header, description}: HeaderTypes) => {
  return (
    <div className='flex flex-col gap-[1px]'>
      <h1 className='text-[38px] font-bold text-MarineBlue'>{header}</h1>
      <p className='text-[17px] font-normal text-CoolGray'>{description}</p>
    </div>
  )
}

export default Header