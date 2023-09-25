import { Header } from './components/Header'
import { Main } from './components/Main'
import { Services } from './components/Services'
import { ToastContainer } from 'react-toastify'
import { Analytics } from '@vercel/analytics/react'
import bg from '@/assets/bg.jpg'
import { Aside } from './components/Aside'
import { useEffect, useState } from 'react'
import { Projects } from './components/Projects'
import { SideMenu } from './components/SideMenu'

function App() {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Analytics />
      <ToastContainer />
      <Header scroll={scrollY} />

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

        <SideMenu />
      </div>

      <Services />
      <Projects />
    </>
  )
}

export default App
