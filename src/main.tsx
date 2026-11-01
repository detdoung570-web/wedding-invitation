import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { silenceThirdPartyWarnings } from './utils/silenceWarnings';

// 1. Silence the YouTube/Adblock local-dev errors
silenceThirdPartyWarnings();

// 2. Render the app
createRoot(document.getElementById('root')!).render(<App />);