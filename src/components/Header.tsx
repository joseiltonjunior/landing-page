import { useEffect, useState } from 'react'
import i18next from 'i18next'

import logo from '@/assets/logo.png'
import brazilFlag from '@/assets/brazil.png'
import euaFlag from '@/assets/eua.png'
import { Switch } from './Switch'
import { useTranslation } from 'react-i18next'

interface HeaderProps {
  scroll: number
}

export function Header({ scroll }: HeaderProps) {
  const ptBR = 'pt-BR'
  const enUS = 'en-US'

  const { t } = useTranslation()

  const [lang, setLang] = useState<string>('')

  function handleChangeLanguage() {
    if (lang === enUS) {
      localStorage.setItem('i18nextLng', ptBR)
      i18next.changeLanguage(ptBR)
      setLang(ptBR)

      return
    }

    localStorage.setItem('i18nextLng', enUS)
    i18next.changeLanguage(enUS)
    setLang(enUS)
  }

  useEffect(() => {
    const localLang = localStorage.getItem('i18nextLng') ?? ptBR
    setLang(localLang)
  }, [lang])

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
        <div className="flex items-center gap-12 md:gap-6 md:mt-4 md:mx-auto">
          <div className="flex gap-8 items-start md:gap-6">
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
              {t('services')}
            </a>
          </div>

          <div className="flex gap-1 h-full">
            <img src={brazilFlag} alt="" className="w-6 h-6" />
            <Switch
              checked={lang !== ptBR}
              onChange={() => handleChangeLanguage()}
            />
            <img src={euaFlag} alt="" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </header>
  )
}
