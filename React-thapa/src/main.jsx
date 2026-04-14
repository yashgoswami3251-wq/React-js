import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Todo } from './projects/ToggleSwitch/Todo/Todo'
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo />
  </StrictMode>
)