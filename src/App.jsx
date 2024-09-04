

import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Quotes from './pages/Quotes'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/quotes' element={<Quotes/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
