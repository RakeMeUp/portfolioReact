import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {default as SectionContext} from './contexts/sectionContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SectionContext>
      <App />
    </SectionContext>
  </React.StrictMode>
)
