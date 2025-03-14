import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LocalProvider } from './context/localContext.jsx'


createRoot(document.getElementById('root')).render(
  
  <LocalProvider>

    <App />

  </LocalProvider>
  
)
