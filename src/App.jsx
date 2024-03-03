import './App.css'
import {
  Route,
  Routes,
  HashRouter
} from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Letters from './pages/Letters'

import Letter1 from './pages/database/Letter1'
import Letter2 from './pages/database/Letter2'
import Letter3 from './pages/database/Letter3'
import Letter4 from './pages/database/Letter4'
import Letter5 from './pages/database/Letter5'
import Letter6 from './pages/database/Letter6'
import Letter7 from './pages/database/Letter7'
import Letter8 from './pages/database/Letter8'
import Letter9 from './pages/database/Letter9'
import Letter10 from './pages/database/Letter10'
import Letter11 from './pages/database/Letter11'
import Letter12 from './pages/database/Letter12'
import Letter13 from './pages/database/Letter13'
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
          <Route
          path="/letters/5"
          element={ <Letter5/> } 
          />
          <Route
          path="/letters/6"
          element={ <Letter6/> } 
          />
          <Route
          path="/letters/7"
          element={ <Letter7/> } 
          />
          <Route
          path="/letters/8"
          element={ <Letter8/> } 
          />
          <Route
          path="/letters/9"
          element={ <Letter9/> } 
          />
          <Route
          path="/letters/10"
          element={ <Letter10/> } 
          />
          <Route
          path="/letters/11"
          element={ <Letter11/> } 
          />
          <Route
            path="/letters/12"
            element={ <Letter12/> } 
            />
          <Route
            path="/letters/13"
            element={ <Letter13/> } 
            />
        </Routes>
      </HashRouter>
    </>
  )
}
