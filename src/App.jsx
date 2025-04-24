import { Outlet } from 'react-router'
import Button from '@mui/material/Button';
import Nav from './components/nav/Nav'
import './App.css'

function App() {

  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
