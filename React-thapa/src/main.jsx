import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DerivedState } from './components/hooks/Print_array_using_State'
import "./index.css";

{/*import Profile from './components/Profile.jsx'*/}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<State />}
    {/*<Profile/>*/}
    <DerivedState />
  </StrictMode> 
)


