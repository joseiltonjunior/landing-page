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
      className="p-3 rounded-2xl outline-none text-gray-500 w-full border-2 focus:border-purple-600"
      {...rest}
    />
  )
}
