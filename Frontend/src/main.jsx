import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { UserProvider } from './context/UserContext.jsx'
import { AuthProvider } from './context/authContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UserProvider> */}
    <AuthProvider>

   
    <App />
     </AuthProvider>
    {/* </UserProvider> */}
    <ToastContainer/>
  </StrictMode>,
)
