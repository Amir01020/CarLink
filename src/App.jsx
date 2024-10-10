import { Route, Routes, Navigate } from 'react-router-dom'
import './App.scss'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Quotes from './pages/Quotes'
import Orders from './pages/Orders'
import Leads from './pages/Leads'
import Register from './layouts/Register'
import Tickets from './pages/Tickets'
import EditOrders from './pages/EditOrders'
import Profile from './pages/Profile'
import Admin from './pages/Admin'
import Reports from './pages/Reports'
import Carriers from './pages/Carriers'
import CarriersProfile from './pages/CarriersProfile'
import Messages from './pages/Messages'
import Payments from './pages/Payments'
import Templates from './pages/Templates'
import Users from './pages/Users'



function App() {
  return (
    <>
      <Routes>
        {/* Redirect root path to /register */}
        <Route path="/" element={<Navigate to="/register" replace />} />

        {/* Register page as a main route */}
        <Route path='register' element={<Register />} />

        {/* Other routes */}
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='admin' element={<Admin />} />
          <Route path='admin/users' element={<Users />} />
          <Route path='quotes' element={<About />} />
          <Route path='reports' element={<Reports />} />
          <Route path='orders' element={<Orders />} />
          <Route path='edit/:id' element={<EditOrders />} />
          <Route path='tickets' element={<Tickets />} />
          <Route path='leads' element={<Leads />} />
          <Route path='carriers' element={<Carriers />} />
          <Route path='messages' element={<Messages />} />
          <Route path='templates' element={<Templates />} />
          <Route path='payments' element={<Payments />} />
          <Route path='carriers/:id' element={<CarriersProfile />} />
          <Route path='reports/customers' element={<Leads />} />
          <Route path='profile' element={<Profile />} />
          <Route path='quotes/add' element={<Quotes />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
