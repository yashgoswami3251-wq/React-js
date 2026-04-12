import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToggleSwitch } from './projects/Toggleswitch/ToggleSwitch'
import "./index.css";

{/*import Profile from './components/Profile.jsx'*/}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<State />}
    {/*<Profile/>*/}
    <ToggleSwitch />
  </StrictMode> 
)


