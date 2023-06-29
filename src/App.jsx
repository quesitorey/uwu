import './App.css'
import {
  Route,
  Routes,
  HashRouter
} from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Letters from './pages/Letters'
import Random from './pages/Random'
import Letter1 from './pages/database/Letter1'
import Letter2 from './pages/database/Letter2'
import Letter3 from './pages/database/Letter3'
import Letter4 from './pages/database/Letter4'

export default function App() {
  
  return (
    <>
      <HashRouter>
        <div className='title'>
          <h1 className="page-title">QuesoLoky</h1>
          <h1 className='page-title-back'>QuesoLoky</h1>
        </div>
        <Navbar/>
        <Routes>
          <Route
          path="/"
          element={ <Home/> }
          />  
          <Route
          path="/letters"
          element={ <Letters/> }
          />
          { /*LETTERS */ }
          
          <Route
          path="/letters/1"
          element={ <Letter1/> }  
          />
          <Route
          path="/letters/2"
          element={ <Letter2/> }  
          />
          <Route
          path="/letters/3"
          element={ <Letter3/> }  
          />
          <Route
          path="/letters/4"
          element={ <Letter4/> } 
          />
        </Routes>
      </HashRouter>
    </>
  )
}
