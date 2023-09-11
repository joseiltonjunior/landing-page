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
      className="p-3 rounded-2xl outline-none text-gray-500 w-full border-2 border-gray-950 focus:border-purple-600"
      {...rest}
    />
  )
}
