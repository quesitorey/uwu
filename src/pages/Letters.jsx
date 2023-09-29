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
      <div className="letter-box">
        <Link className="letters" to="/letters/3">3</Link>
      </div>
      <div className="letter-box">
        <Link className="letters" to="/letters/4">4</Link>
      </div>
      <div className="letter-box">
        <Link className="letters" to="/letters/5">5</Link>
      </div>
      <div className="letter-box">
        <Link className="letters" to="/letters/6">6</Link>
      </div>
      <div className="letter-box">
        <Link className="letters" to="/letters/7">7</Link>
      </div>
      <div className="letter-box">
        <Link className="letters" to="/letters/8">8</Link>
      </div>
      <div className="letter-box">
        <Link className="letters" to="/letters/9">9</Link>
      </div>
    </div>
  )
}
export default Letters