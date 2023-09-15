interface HeaderProps {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
}

export function Header({ step }: HeaderProps) {
  return (
    <header className="flex justify-between py-8 md:flex-col ">
      <div className="md:mx-auto">
        <p className="font-bold text-2xl transform hover:scale-110 transition duration-300">
          Junior Ferreira
        </p>
        <p className="ms-4 font-bold text-2xl text-purple-600 transform hover:scale-110 transition duration-300">
          Desenvolvedor de Software
        </p>
      </div>
      <div className="flex gap-8 md:mt-4 md:mx-auto items-start">
        <a
          className={`h-fit font-bold ${
            step === 0 && 'border-b-2 border-purple-600'
          }`}
        >
          Home
        </a>

        <a
          className="font-bold text-purple-600 hover:border-b-2"
          href="#services"
          rel="noreferrer"
        >
          Serviços
        </a>
      </div>
    </header>
  )
}
