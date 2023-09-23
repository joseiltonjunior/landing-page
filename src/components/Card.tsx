import { ComponentProps } from 'react'

interface CardProps extends ComponentProps<'div'> {
  icon: string
  title: string
  description: string
}

export function Card({ description, icon, title }: CardProps) {
  return (
    <div className="bg-gray-500 rounded-lg p-4 flex flex-col h-96">
      <img
        src={icon}
        alt="service logo"
        className="w-36 h-36 ml-auto mr-auto transform hover:scale-110 transition duration-300"
      />
      <p className="text-lg font-bold mt-4">{title}</p>
      <p className="mt-2">{description}</p>
    </div>
  )
}
