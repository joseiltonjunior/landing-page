import { useKeenSlider } from 'keen-slider/react'

import { Card } from './Card'
import 'keen-slider/keen-slider.min.css'
import { mockServices } from '@/utils/mockServices'
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export function Services() {
  const [screenWidth, setScreenWidth] = useState(0)
  const { t } = useTranslation()
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: screenWidth < 900 ? 1 : 4,
      spacing: 16,
    },
    loop: true,
  })

  useEffect(() => {
    function getScreenWidth() {
      return (
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      )
    }

    function handleResize() {
      const screenWidth = getScreenWidth()
      setScreenWidth(screenWidth)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="relative max-w-7xl ms-auto md:p-4 me-auto mb-12 md:mb-4">
      <button
        className="absolute w-12 h-12 top-1/2 md:hidden z-10 left-0 rounded-full items-center justify-center flex bg-gray-500 hover:bg-purple-700"
        onClick={() => instanceRef.current?.prev()}
      >
        <AiFillCaretLeft size={20} />
      </button>

      <div className="mb-4 mt-12 md:mt-4 relative ms-auto me-auto max-w-6xl">
        <p className="font-bold text-2xl" id="services">
          {t('myWork')}
        </p>

        <div className="flex overflow-hidden mt-6" ref={sliderRef}>
          {mockServices.map((service, index) => (
            <div key={index} className="keen-slider__slide">
              <Card
                icon={service.icon}
                title={t(`titleWork0${index + 1}`)}
                description={t(`descriptionWork0${index + 1}`)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between base:hidden">
        <button
          className="w-12 h-12 top-1/2 z-10 left-0 rounded-full items-center justify-center flex bg-gray-500 hover:bg-purple-700"
          onClick={() => instanceRef.current?.prev()}
        >
          <AiFillCaretLeft size={20} />
        </button>

        <button
          className="w-12 h-12 top-1/2 z-10 right-0 rounded-full items-center justify-center flex bg-gray-500 hover:bg-purple-700"
          onClick={() => instanceRef.current?.next()}
        >
          <AiFillCaretRight size={20} />
        </button>
      </div>

      <button
        className="absolute md:hidden w-12 h-12 top-1/2 z-10 right-0 rounded-full items-center justify-center flex bg-gray-500 hover:bg-purple-700"
        onClick={() => instanceRef.current?.next()}
      >
        <AiFillCaretRight size={20} />
      </button>
    </div>
  )
}
