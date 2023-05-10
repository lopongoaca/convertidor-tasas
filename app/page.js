'use client';
import { Header } from './components/Header'
import { InputTasa } from './components/InputTasa'
import { useState } from 'react'
import { Open_Sans } from 'next/font/google'
const opensans = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  const [result, setResult] = useState('12')
  const [texto, setTexto] = useState('La tasa efectiva es anual')

  const valueResult = (value) => setResult(value)
  const textResult = (value) => setTexto(value)

  return (
    <main>
      <Header />
      <div className="container flex gap-12 justify-center">
        <InputTasa title='Efectivo Anual' type='ea' onData={valueResult} onText={textResult} />
        <InputTasa title='Efectivo Mensual' type='em' onData={valueResult} onText={textResult} />
      </div>
      {
        texto &&
        <div className='text-center'>
          <h3 className={`text-2xl ${opensans.className} font-extralight`}>{texto}</h3>
          <h3 className={`text-4xl ${opensans.className} font-extrabold`}>{result}%</h3>
        </div>
      }

    </main>
  )
}
