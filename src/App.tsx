import { useState } from 'react'
import { Aside } from './components/Aside'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Services } from './components/Services'
import { ToastContainer } from 'react-toastify'
import { Analytics } from '@vercel/analytics/react'

function App() {
  const [step, setStep] = useState(0)

  return (
    <div className="max-w-6xl mx-auto md:px-4">
      <Analytics />
      <ToastContainer />
      <Header step={step} setStep={setStep} />

      <>
        <div className="grid grid-cols-2 mt-8 md:grid-cols-1 gap-16">
          <Aside />
          <Main />
        </div>
        <Services />
      </>
    </div>
  )
}

export default App
