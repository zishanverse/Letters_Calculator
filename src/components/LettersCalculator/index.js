import './index.css'

const LettersCalculator = props => {
  const {func, num} = props

  const countLetters = event => {
    const n = event.target.value.length
    func(n)
  }

  return (
    <div className="container">
      <div className="content">
        <h1 className="heading">Calculate the Letters you enter</h1>
        <div>
          <label className="para" htmlFor="phrase">
            Enter the phrase
          </label>
          <input
            type="search"
            className="input"
            onChange={countLetters}
            id="phrase"
          />
        </div>
        <div className="countContainer">
          <p className="head">No.of letters: {num}</p>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        alt="letters calculator"
        className="img"
      />
    </div>
  )
}

export default LettersCalculator
