import { Outlet } from 'react-router'
import Nav from './components/nav/Nav'
import './App.css'

function App() {

  return (
    <>
      <Nav />
      <h2>React App</h2>
      <Outlet />
    </>
  )
}

export default App
