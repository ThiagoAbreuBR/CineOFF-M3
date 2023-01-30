import NavBar from './componentes/NavBar'
import { Outlet } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div className='container'>
      <AppRoutes/>
        <Outlet />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
