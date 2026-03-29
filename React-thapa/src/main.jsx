import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Eventprops } from './components/EventProps'
import "./index.css";

{/*import Profile from './components/Profile.jsx'*/}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Eventprops />
    {/*<Profile/>*/}
  </StrictMode>,
)