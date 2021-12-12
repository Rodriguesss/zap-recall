import next from '../../assets/img/next.png'

export default function Button({ text, setPage, value, reset,
  setFinishedDataIndex, setCount, setDeck, deck, setValue, setShowError }) {
  let error

  function checkInputValue() {
    error = (value < 2)
    error ? setShowError(error) : defineDeck()
  }

  function defineDeck() {
    setDeck(deck)
    setPage('card')
  }

  function restart() {
    error = false
    setFinishedDataIndex(0)
    setCount(0)
    setValue(0)
    setPage('home')
  }

  return (
    <>
      <button className="buttonStart" onClick={reset ? restart : checkInputValue}
        data-identifier="start-zap-recall">
        {text}
        <img src={next} alt="Next" height="20" />
      </button>
    </>
  )
}