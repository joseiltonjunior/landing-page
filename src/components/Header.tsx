import logo from '@/assets/logo.png'

export function Header() {
  return (
    <header
      className={`py-4 w-screen fixed z-10 bg-gray-950/90 shadow-sm shadow-gray-950`}
    >
      <div className="max-w-6xl ms-auto me-auto w-full flex justify-between items-center">
        <div className="md:mx-auto flex items-center">
          <img src={logo} alt="logo" className="rounded-xl w-12 h-12" />
        </div>
        <div className="flex gap-8 md:mt-4 md:mx-auto items-start">
          <a
            href="#home"
            className={`h-fit font-bold border-b-2 border-transparent hover:border-purple-600`}
          >
            Home
          </a>

          <a
            className="font-bold border-b-2 border-transparent hover:border-purple-600"
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
