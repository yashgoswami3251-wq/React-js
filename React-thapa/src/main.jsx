import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { State } from './components/hooks/Staterendered'
import "./index.css";

{/*import Profile from './components/Profile.jsx'*/}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <State />
    {/*<Profile/>*/}
    <Sibling />
  </StrictMode> 
)

export function Sibling (){
    console.log("Sibling rendred")
    
    return(
        <div>
            <h2> Sibling components</h2>
        </div> 
    );
};
