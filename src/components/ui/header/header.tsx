import { HeaderTypes } from './headertypes'

const Header = ({header, description}: HeaderTypes) => {
  return (
    <div className='flex flex-col gap-2'>
      <h1>{header}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Header
