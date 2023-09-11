import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {}

export function Input({ ...rest }: InputProps) {
  return (
    <input
      className="p-3 rounded-2xl outline-none text-gray-500 w-full border-2 border-gray-950 focus:border-purple-600"
      {...rest}
    />
  )
}
