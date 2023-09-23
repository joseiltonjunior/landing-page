import { ComponentProps } from 'react'

interface SwithProps extends ComponentProps<'input'> {}

export function Switch({ ...rest }: SwithProps) {
  return (
    <label className="relative inline-flex items-center cursor-pointer border-none ">
      <input type="checkbox" className="sr-only peer" {...rest} />
      <div className="w-8 h-4 bg-gray-500 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-purple-600 after:content-[''] after:absolute after:top-1.5 after:left-[5px] after:bg-purple-600 after:border-purple-600 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-500 " />
    </label>
  )
}
