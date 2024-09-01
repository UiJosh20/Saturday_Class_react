import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Fetch from './Components/Fetch/Fetch'
import Foot from './Components/Footer/Foot'
import Home from './Components/Home/Home'
import Nav from './Components/Navigation/Nav'
import Layout from './Components/UserLayout/Layout'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/fetch' element={<Fetch/>} />

      <Route path='/user' element={<Layout/>}>
        <Route path='/user/dashboard' element={<Navigate to={"/user/home"}/>}/>
        <Route path='/user/dashboard' element={<Dashboard/>} />
        <Route path='/user/home' element={<Home/>} />
        <Route path='/user/login' element={<Login/>} />
        <Route path='/user/fetch' element={<Fetch/>} />
      </Route>

    </Routes>
    </>
  )
}

export default App
