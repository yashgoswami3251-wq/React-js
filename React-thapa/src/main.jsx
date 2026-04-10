import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DerivedState } from './components/hooks/DericedState'
import "./index.css";

{/*import Profile from './components/Profile.jsx'*/}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<State />}
    {/*<Profile/>*/}
    <DerivedState />
  </StrictMode> 
)


