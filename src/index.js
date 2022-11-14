import App from './App'
import {StrictMode} from 'react'
import React from 'react'
import './index.css'
import * as ReactDOMClient from 'react-dom/client'

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);