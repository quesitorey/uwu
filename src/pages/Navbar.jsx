import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="home-nav">

      <div className='home-nav-items'>
        <Link className="home-nav-item" to="/">Home</Link>
        <Link className="home-nav-item" to="/letters">Letters</Link>
      </div>
      
    </nav>
  )
}
export default Navbar

