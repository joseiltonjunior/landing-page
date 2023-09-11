import { useState } from 'react'

interface CardProps {
  icon: string
  title: string
  description: string
  moreDescription: string
}

export function Card({ description, icon, moreDescription, title }: CardProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="bg-gray-500 rounded-lg p-4 flex flex-col">
      {!isVisible && (
        <>
          <img src={icon} alt="" className="w-36 h-36 ml-auto mr-auto" />
          <p className="text-lg font-bold mt-4">{title}</p>
          <p className="mt-2">{description}</p>
        </>
      )}
      <p className={`${isVisible ? 'visible' : 'hidden'}`}>{moreDescription}</p>
      <button
        className="bg-purple-600 rounded-md p-2 w-full mt-auto hover:bg-purple-600/80 font-bold"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? 'Ver menos' : 'Ver mais'}
      </button>
    </div>
  )
}
