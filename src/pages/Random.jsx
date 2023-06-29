const Random = ({ random, letter }) => {

  console.log(letter)
  const randomLetter = letter[random]
  return(
    <>
      <div>{ randomLetter }</div>
    </>
  )
}
export default Random