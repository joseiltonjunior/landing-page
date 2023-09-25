import { useTranslation } from 'react-i18next'

import brazilFlag from '@/assets/brazil.png'
import euaFlag from '@/assets/eua.png'
import { Switch } from './Switch'
import { useEffect, useState } from 'react'
import i18next from 'i18next'
import { useSideMenu } from '@/hooks/useSideMenu'

export function SideMenu() {
  const { t } = useTranslation()

  const ptBR = 'pt-BR'
  const enUS = 'en-US'

  const [lang, setLang] = useState<string>('')

  const { isVisible, handleSideMenu } = useSideMenu()

  function handleChangeLanguage() {
    if (lang === enUS) {
      localStorage.setItem('i18nextLng', ptBR)
      i18next.changeLanguage(ptBR)
      setLang(ptBR)

      handleSideMenu()

      return
    }

    localStorage.setItem('i18nextLng', enUS)
    i18next.changeLanguage(enUS)
    setLang(enUS)

    handleSideMenu()
  }

  useEffect(() => {
    const localLang = localStorage.getItem('i18nextLng') ?? ptBR
    setLang(localLang)
  }, [lang])

  return (
    <div
      className={`flex gap-4 flex-col base:hidden border-t border-gray-500 bg-gray-950 h-screen top-[80px] z-20 w-52 right-0 p-4 ${
        isVisible ? 'fixed' : 'hidden'
      }`}
    >
      <a
        href="#home"
        className="font-bold text-right"
        onClick={() => handleSideMenu()}
      >
        Home
      </a>

      <a
        href="#services"
        className="font-bold text-right"
        rel="noreferrer"
        onClick={() => handleSideMenu()}
      >
        {t('services')}
      </a>

      <a
        href="#projects"
        rel="noreferrer"
        className="font-bold text-right"
        onClick={() => handleSideMenu()}
      >
        {t('projects')}
      </a>

      <div className="flex gap-1 justify-end">
        <img src={brazilFlag} alt="" className="w-6 h-6" />
        <Switch
          checked={lang !== ptBR}
          onChange={() => handleChangeLanguage()}
        />
        <img src={euaFlag} alt="" className="w-6 h-6" />
      </div>
    </div>
  )
}
