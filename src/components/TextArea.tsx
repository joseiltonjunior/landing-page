import { ComponentProps } from 'react'

interface TextAreaProps extends ComponentProps<'textarea'> {}

export function TextArea({ ...rest }: TextAreaProps) {
  return (
    <textarea
      className="p-3 rounded-2xl outline-none text-gray-500 w-full border-2 focus:border-purple-600"
      {...rest}
    />
  )
}
