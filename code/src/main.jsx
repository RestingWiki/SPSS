import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './HomePage/HomePage.jsx'
import LoginPage from './LoginPage/LoginPage.jsx'
import LoginSelectionPage from './LoginSelectionPage/LoginSelectionPage.jsx'
import SPSOHomePage from './SPSOHomePage/SPSOHoMEPage.jsx'
import SPSOSystemConfig from './SPSOHomePage/SPSOSystemConfig/SPSOSystemConfig.jsx'
import SPSOPrinterManagement from './SPSOHomePage/SPSOPrinterManagement/SPSOPrinterManagement.jsx'
import SPSOLogs from './SPSOHomePage/SPSOLogs/SPSOLogs.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
  },
  {
    path: '/HomePage',
    element: <HomePage/>,
  },
  {
    path: '/LoginSelectionPage',
    element: <LoginSelectionPage/>,
  },
  {
    path: '/LoginPage',
    element: <LoginPage/>,
  },
  {
    path: '/SPSOHomePage',
    element: <SPSOHomePage/>,
  },
  {
    path: '/SPSOHomePage/SPSOSystemConfig',
    element: <SPSOSystemConfig/>,
  },
  {
    path: '/SPSOHomePage/SPSOPrinterManagement',
    element: <SPSOPrinterManagement/>,
  },
  {
    path: '/SPSOHomePage/SPSOLogs',
    element: <SPSOLogs/>,
  },
   
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
