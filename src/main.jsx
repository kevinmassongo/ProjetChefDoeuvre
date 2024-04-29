import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DataProvider from './provider/data-provider.jsx'
import Index from '../routes/index.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <Index />
    </DataProvider>
  </React.StrictMode>,
)
