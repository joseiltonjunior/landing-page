/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

interface TextAreaProps extends ComponentProps<'textarea'> {
  register: UseFormRegister<any>
  error?: FieldError
  name: string
}

export function TextArea({ register, name, ...rest }: TextAreaProps) {
  return (
    <textarea
      {...register(name)}
      className="py-2 outline-none text-white w-full font-semibold bg-transparent border-b-2 border-gray-400 focus:border-purple-600"
      {...rest}
    />
  )
}
