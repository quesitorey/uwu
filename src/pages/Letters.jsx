import { Link } from 'react-router-dom'
const Letters = () => {

  return(
    <div className="letter-body">
      <div className="letter-box">
        <Link className="letters" to="/letters/1">1</Link>
      </div>
      <div className="letter-box">
        <Link className="letters" to="/letters/2">2</Link>
      </div>
      
    </div>
  )
}
export default Letters