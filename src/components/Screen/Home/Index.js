import { useState } from 'react'

import Logo from './Logo'
import InputZap from './InputZap'
import Button from '../../Generic/Button'

import { decks } from '../../../database/seed'

export default function Index({ setPage, value, setValue, setDeck }) {
  const [showError, setShowError] = useState(false)

  return (
    <div className="container">
      <Logo />
      <div>
        <InputZap setValue={setValue} />
        {showError && <p className="msgError">Deve ser no minímo 2 zaps</p>}
        {decks.map((deck, index) => (
          <Button text={`Praticar ${deck.name}`} setPage={setPage}
            value={value} reset={false} setDeck={setDeck} deck={index}
            setShowError={setShowError} />
        ))}
      </div>
    </div>
  )
}
