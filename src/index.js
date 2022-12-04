import './index.css'
import App from './App'
import { HashRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

root.render(
    <Router>
        <App />
    </Router>
)
