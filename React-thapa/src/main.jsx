import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { State } from './components/hooks/State'
import "./index.css";

{/*import Profile from './components/Profile.jsx'*/}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <State />
    {/*<Profile/>*/}
  </StrictMode>,
)