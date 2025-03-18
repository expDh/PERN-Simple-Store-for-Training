import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserStore from './store/UserStore.js'
import DeviceStore from './store/DeviceStore.js'


export const Context = createContext(null)
// console.log(import.meta.env.VITE_API_URL)

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    
    <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }}>
      <App />


    </Context.Provider>
  </StrictMode>,
)
