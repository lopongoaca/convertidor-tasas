'use client';
import { Header } from './components/Header'
import { InputTasa } from './components/InputTasa'
import { useState } from 'react'
import { Open_Sans } from 'next/font/google'
const opensans = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  const [result, setResult] = useState()
  const [texto, setTexto] = useState(`⬆️
  Digita la tasa que quieres convertir`)

  const valueResult = (value) => setResult(value)
  const textResult = (value) => setTexto(value)

  return (
    <main>
      <Header />
      <div className="container flex gap-6 sm:gap-12 justify-center">
        <InputTasa title='Efectivo Anual' type='ea' onData={valueResult} onText={textResult} />
        <InputTasa title='Efectivo Mensual' type='em' onData={valueResult} onText={textResult} />
      </div>

      <div className='text-center'>
        {texto && <h3 className={`text-2xl ${opensans.className} font-extralight`}>{texto}</h3>}
        {result && <h3 className={`text-4xl ${opensans.className} font-extrabold`}>{result}%</h3>}
      </div>

      <footer>
        <div className="container flex justify-center">
          <p className="text-center text-sm text-gray-500">
            Made with 🍺 by <a href="https://twitter.com/lopongoaca" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Lopongoaca</a>
          </p>
        </div>
      </footer>

    </main>
  )
}
