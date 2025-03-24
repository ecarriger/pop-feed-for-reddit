import { Outlet } from 'react-router'
import Button from '@mui/material/Button';
import Nav from './components/nav/Nav'
import './App.css'

function App() {

  return (
    <>
      <Nav />
      <h2>React App</h2>
      <Button variant="contained">MUI</Button>
      <Outlet />
    </>
  )
}

export default App
