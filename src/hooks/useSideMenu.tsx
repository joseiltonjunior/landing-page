import { createContext, useContext, useState } from 'react'

interface SideMenuContextData {
  handleSideMenu(): void
  isVisible: boolean
}

const SideMenuContext = createContext<SideMenuContextData>(
  {} as SideMenuContextData,
)

export function SideMenuProvider({ children }: React.PropsWithChildren) {
  const [visible, setVisible] = useState(false)

  const handleSideMenu = () => {
    setVisible(!visible)
  }

  return (
    <SideMenuContext.Provider value={{ handleSideMenu, isVisible: visible }}>
      {children}
    </SideMenuContext.Provider>
  )
}

export function useSideMenu(): SideMenuContextData {
  const context = useContext(SideMenuContext)

  if (!context) {
    throw new Error('useSideMenu must be used within an SideMenuProvider')
  }

  return context
}
