import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Analytics from './components/Analytics'
import GetMobileAlerts from './components/GetMobileAlerts'
import Reports from './components/Reports'

function App() {
  
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Dashboard/>}/>
        <Route path='/Analytics' element={<Analytics/>}/>
        <Route path='/GetMobileAlerts' element={<GetMobileAlerts/>}/>
        <Route path='/Reports' element={<Reports/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
