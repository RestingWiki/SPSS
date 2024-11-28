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
import SPSODashboard from './SPSOHomePage/SPSODashboard/SPSODashboard.jsx'

import StudentLoginPage from './StudentLoginPage/StudentLoginPage.jsx'
import StudentHomePage from './StudentHomePage/StudentHomePage.jsx'
import StudentUploadDocuments from './StudentHomePage/StudentUploadDocuments/StudentUploadDocuments.jsx'
import StudentInformation from './StudentHomePage/StudentInformation/StudentInformation.jsx'
import StudentBuyPaper from './StudentHomePage/StudentBuyPaper/StudentBuyPaper.jsx'
import StudentPrintDocuments from './StudentHomePage/StudentPrintDocuments/StudentPrintDocuments.jsx'
import StudentViewPrinter from './StudentHomePage/StudentViewPrinter/StudentViewPrinter.jsx'


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
  {
    path: '/SPSOHomePage/SPSODashboard',
    element: <SPSODashboard/>,
  },
  // Adding student pages
  // Explicitly named student paths
  {
    path: '/StudentLoginPage',
    element: <StudentLoginPage/>,
  },
  {
    path: '/StudentHomePage',
    element: <StudentHomePage />,
  },
  {
    path: '/StudentHomePage/StudentInformation',
    element: <StudentInformation />,
  },
  {
    path: '/StudentHomePage/StudentUploadDocuments',
    element: <StudentUploadDocuments />,
  },
  {
    path: '/StudentHomePage/StudentBuyPaper',
    element: <StudentBuyPaper />,
  },
  {
    path: '/StudentHomePage/StudentPrintDocuments',
    element: <StudentPrintDocuments />,
  },
  {
    path: '/StudentHomePage/StudentViewPrinter',
    element: <StudentViewPrinter />,
  },
   
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
