import React from 'react'
import { App } from './App'
import { createRoot } from 'react-dom/client'
import '../styles/_global.scss'
import 'assets/images/favicon.png'
const domNode = document.getElementById('root')
if (domNode) {
  const root = createRoot(domNode)
  root.render(<App />)
}
