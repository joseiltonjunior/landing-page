import logo from '@/assets/logo.png'

interface HeaderProps {
  scroll: number
}

export function Header({ scroll }: HeaderProps) {
  return (
    <header
      className={`py-4 w-screen fixed z-10  shadow-sm shadow-gray-950 ${
        scroll > 80 ? 'bg-gray-950' : 'bg-gray-950/70'
      } transition duration-300`}
    >
      <div className="max-w-6xl ms-auto me-auto w-full flex justify-between items-center">
        <div className="md:mx-auto flex items-center">
          <img src={logo} alt="logo" className="rounded-xl w-12 h-12" />
        </div>
        <div className="flex gap-8 md:mt-4 md:mx-auto items-start">
          <a
            href="#home"
            className={`h-fit font-bold border-b-2 border-transparent hover:border-purple-600 ${
              scroll > 80 && 'hover:border-gray-500'
            }`}
          >
            Home
          </a>

          <a
            className={`font-bold border-b-2 border-transparent hover:border-purple-600 ${
              scroll > 80 && 'hover:border-gray-500'
            }`}
            href="#services"
            rel="noreferrer"
          >
            Serviços
          </a>
        </div>
      </div>
    </header>
  )
}
