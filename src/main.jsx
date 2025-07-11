import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '../src/routes'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router}/>
    <GlobalStyles/>
    <ToastContainer autoClose={2000} theme='colored'/>
  </React.StrictMode>,
)
