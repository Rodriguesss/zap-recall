import { useState } from 'react'
import next from '../../../assets/img/next.png'

export default function ButtonStart({ text, setPage, value }) {
  const [showError, setShowError] = useState(false)
  let error

  function checkInputValue() {
    error = (value < 2)
    error ? setShowError(error) : setPage('card')
  }

  return (
    <>
      {showError && <p className="msgError">Deve ter no minímo 2 zaps</p>}
      <button className="buttonStart" onClick={checkInputValue}
        data-identifier="start-zap-recall">
        {text}
        <img src={next} alt="Next" height="20" />
      </button>
    </>
  )
}