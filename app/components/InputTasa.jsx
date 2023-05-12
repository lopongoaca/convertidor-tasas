import { Input } from './Input'
import { Open_Sans } from 'next/font/google'
const opensans = Open_Sans({ subsets: ['latin'] })

export const InputTasa = ({ children, title, type, onData, onText }) => {

  return (
    <div className='card p-7 px-0'>
      <h2 className={opensans.className}>{title}</h2>
      <Input placeholder='0%' type={type} onData={onData} onText={onText} />
    </div>
  )
}