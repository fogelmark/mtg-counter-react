import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/global/main.scss'
import CountContextProvider from './context/countContext.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountContextProvider>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
    </CountContextProvider>
  </React.StrictMode>,
)
