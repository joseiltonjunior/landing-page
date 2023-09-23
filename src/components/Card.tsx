import { ComponentProps, useState } from 'react'

interface CardProps extends ComponentProps<'div'> {
  icon: string
  title: string
  description: string

  urlExample?: string
}

export function Card({
  description,
  icon,
  urlExample,

  title,
}: CardProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="bg-gray-500 rounded-lg p-4 flex flex-col h-96">
      {!isVisible && (
        <>
          <img
            src={icon}
            alt=""
            className="w-36 h-36 ml-auto mr-auto transform hover:scale-110 transition duration-300"
          />
          <p className="text-lg font-bold mt-4">{title}</p>
          <p className="mt-2">{description}</p>
        </>
      )}

      {/* <button
        className="bg-purple-600 rounded-md p-2 w-full mt-auto hover:bg-purple-600/80 font-bold"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? 'Ver menos' : 'Ver mais'}
      </button> */}

      {urlExample && (
        <a
          className="bg-white text-purple-600 rounded-md mt-2 p-2 w-full  hover:bg-white/80 font-bold items-center flex justify-center"
          href={urlExample}
          target="_blank"
          rel="noreferrer"
        >
          Exemplo
        </a>
      )}
    </div>
  )
}
