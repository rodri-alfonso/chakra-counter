import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AbilitiesProvider } from './context/habilities.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AbilitiesProvider>
			<App />
		</AbilitiesProvider>
	</React.StrictMode>
)
