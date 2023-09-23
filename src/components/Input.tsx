/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

interface InputProps extends ComponentProps<'input'> {
  register: UseFormRegister<any>
  error?: FieldError
  name: string
}

export function Input({ register, name, ...rest }: InputProps) {
  return (
    <input
      {...register(name)}
      className="py-2 outline-none bg-transparent  text-white font-semibold w-full border-b-2 border-gray-400 focus:border-purple-600"
      {...rest}
    />
  )
}
