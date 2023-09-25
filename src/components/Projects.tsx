import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { collection, getDocs, query } from 'firebase/firestore'
import { firestore } from '@/services/firebase'
import { ProjectProps } from '@/utils/projectsProps'
import { useToast } from '@/hooks/useToast'
import Skeleton from 'react-loading-skeleton'

export function Projects() {
  const [screenWidth, setScreenWidth] = useState(0)
  const [projects, setProjects] = useState<ProjectProps[]>()
  const { t } = useTranslation()
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: screenWidth < 900 ? 1 : 3,
      spacing: 16,
    },
    loop: true,
  })

  const { showToast } = useToast()

  const handleProjectsPortfolio = useCallback(() => {
    const q = query(collection(firestore, 'projects'))
    getDocs(q)
      .then((querySnapshot) => {
        const techsResponses = querySnapshot.docs.map(
          (doc) =>
            ({
              imgUrl: doc.data().imgUrl,
              url: doc.data().url,
              description: doc.data().description,
              name: doc.data().name,
              techs: doc.data().techs,
              status: doc.data().status,
            }) as ProjectProps,
        )

        setProjects(techsResponses)
      })
      .catch(() => {
        showToast('Error while fetching projects', {
          type: 'error',
          theme: 'colored',
        })
      })
  }, [showToast])

  useEffect(() => {
    handleProjectsPortfolio()
  }, [handleProjectsPortfolio])

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 8000)

    return () => {
      clearInterval(interval)
    }
  }, [instanceRef])

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
      {projects && (
        <button
          className="absolute w-12 h-12 top-1/2 md:hidden z-10 left-0 rounded-full items-center justify-center flex bg-gray-500 hover:bg-purple-700"
          onClick={() => instanceRef.current?.prev()}
        >
          <AiFillCaretLeft size={20} />
        </button>
      )}

      <div className="mb-4 mt-12 md:mt-4 relative ms-auto me-auto max-w-6xl">
        <p className="font-bold text-2xl" id="projects">
          {t('projects')}
        </p>

        {projects ? (
          <div className="flex overflow-hidden mt-6" ref={sliderRef}>
            {projects.map((project, index) => (
              <a
                href={project.url}
                target="_blank"
                key={index}
                className="keen-slider__slide border border-gray-500 rounded-xl overflow-hidden grid-rows-[200px,auto] grid"
                rel="noreferrer"
              >
                <img
                  src={project.imgUrl}
                  alt="project img"
                  className="object-cover"
                />
                <div className="p-4 bg-gray-500">
                  <h1 className="font-bold text-lg">{project.name}</h1>
                  <p className="mt-2">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            <Skeleton height={350} borderRadius={12} width={'100%'} />
            <Skeleton height={350} borderRadius={12} width={'100%'} />
            <Skeleton height={350} borderRadius={12} width={'100%'} />
          </div>
        )}
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

      {projects && (
        <button
          className="absolute md:hidden w-12 h-12 top-1/2 z-10 right-0 rounded-full items-center justify-center flex bg-gray-500 hover:bg-purple-700"
          onClick={() => instanceRef.current?.next()}
        >
          <AiFillCaretRight size={20} />
        </button>
      )}
    </div>
  )
}
