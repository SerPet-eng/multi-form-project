import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/style.css';
import App from './App.jsx';
import WindowContext from './store/WindowContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WindowContext>
      <App />
    </WindowContext>
  </StrictMode>,
);
