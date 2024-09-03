import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import {App} from './htmlApp.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
<App />
)
