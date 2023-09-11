import { ComponentProps } from 'react'
import ReactLoading from 'react-loading'

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean
}

export function Button({ children, isLoading, ...rest }: ButtonProps) {
  return (
    <button
      className="bg-purple-600 p-3 rounded-2xl hover:bg-transparent border-2 border-gray-950 hover:border-purple-600 outline-none font-bold text-lg"
      {...rest}
    >
      {isLoading ? (
        <ReactLoading
          className="loading ml-auto mr-auto"
          type="bars"
          color={'#fff'}
          width={30}
          height={30}
        />
      ) : (
        children
      )}
    </button>
  )
}
