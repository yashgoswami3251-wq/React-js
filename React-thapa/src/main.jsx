import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { EventHandling } from './components/Eventhandling'
import "./index.css";

{/*import Profile from './components/Profile.jsx'*/}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventHandling />
    {/*<Profile/>*/}
  </StrictMode>,
)