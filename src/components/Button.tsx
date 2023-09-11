import { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="bg-purple-600 p-3 rounded-2xl hover:bg-transparent border-2 border-gray-950 hover:border-purple-600 outline-none font-bold text-lg"
      {...rest}
    >
      {children}
    </button>
  )
}
