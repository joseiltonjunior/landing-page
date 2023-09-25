import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'react-loading-skeleton/dist/skeleton.css'
import './styles/main.css'
import './i18n'

import { SkeletonTheme } from 'react-loading-skeleton'
import { SideMenuProvider } from './hooks/useSideMenu.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SideMenuProvider>
      <SkeletonTheme baseColor={'#2E2E35'} highlightColor={'#202022'}>
        <App />
      </SkeletonTheme>
    </SideMenuProvider>
  </React.StrictMode>,
)
