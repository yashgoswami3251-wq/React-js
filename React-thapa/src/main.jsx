import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LiftingState } from './components/LiftStateUp'
import "./index.css";

{/*import Profile from './components/Profile.jsx'*/}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<State />}
    {/*<Profile/>*/}
    <LiftingState />
  </StrictMode> 
)


