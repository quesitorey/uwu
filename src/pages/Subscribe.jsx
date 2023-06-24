const Subscribe = () => {
  return(
    <div className="subscribe-container">
      <div className="subscribe-box-up">
        <p>
         Subscribe to our page 
        </p>
      </div>
      <div className="subscribe-box">
          <input 
            name="email"
            method="POST"
            className="input-email"
            netlify 
            placeholder="Enter your email"
            required/>
        <br/>
        <br/>
        <button type="submit">Submit</button>
      </div>
    </div>
  )
}
export default Subscribe