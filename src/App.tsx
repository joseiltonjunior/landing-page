import { Header } from './components/Header'
import { Main } from './components/Main'
import { Services } from './components/Services'
import { ToastContainer } from 'react-toastify'
import { Analytics } from '@vercel/analytics/react'
import bg from '@/assets/bg.jpg'
import { Aside } from './components/Aside'

function App() {
  return (
    <>
      <Analytics />
      <ToastContainer />
      <Header />

      <div
        id="home"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center',
          backgroundSize: '130%',
        }}
        className="object-cover h-screen md:h-auto flex items-center justify-center "
      >
        <div className="bg-black/80 md:p-4 h-full w-full flex items-center justify-center">
          <div className="grid grid-cols-[auto,500px] gap-8 max-w-7xl mt-16 md:grid-cols-1">
            <Aside />
            <Main />
          </div>
        </div>
      </div>

      <Services />
    </>
  )
}

export default App
