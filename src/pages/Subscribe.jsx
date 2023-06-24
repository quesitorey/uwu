const Subscribe = () => {
  return(
    <form className="subscribe-container">
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
            data-netlify="true" 
            placeholder="Enter your email"
            required/>
        <br/>
        <br/>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
export default Subscribe