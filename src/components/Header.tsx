interface HeaderProps {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
}

export function Header({ step, setStep }: HeaderProps) {
  return (
    <header className="flex justify-between py-8 md:flex-col ">
      <div className="md:mx-auto">
        <p className="font-bold text-2xl">Junior Ferreira</p>
        <p className="ms-4 font-bold text-2xl text-purple-600">
          Desenvolvedor de Software
        </p>
      </div>
      <div className="flex gap-8 md:mt-4 md:mx-auto items-start">
        <button
          className={`h-fit font-bold ${
            step === 0 && 'border-b-2 border-purple-600'
          }`}
          onClick={() => setStep(0)}
        >
          Home
        </button>
        <button
          className={`h-fit font-bold ${
            step === 1 && 'border-b-2 border-purple-600'
          }`}
          onClick={() => setStep(1)}
        >
          Serviços
        </button>
        <a
          className="font-bold text-purple-600 hover:border-b-2"
          href="https://ferreirajr.tech/"
          target="_blank"
          rel="noreferrer"
        >
          Portfólio
        </a>
      </div>
    </header>
  )
}
