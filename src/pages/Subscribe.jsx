const Subscribe = () => {
  return(
    <form 
      className="subscribe-container"
      method="POST"
      netlify
      >
      <div className="subscribe-box-up">
        <p>
         Subscribe to our page 
        </p>
      </div>
      <div className="subscribe-box">
          <input 
            name="email"
            className="input-email"
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