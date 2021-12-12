import { useState } from 'react'

import Logo from './Logo'
import InputZap from './InputZap'
import ButtonStart from '../../Generic/ButtonStart'

export default function Index({ setPage, value, setValue }) {
  return (
    <div className="container">
      <Logo />
      <div>
        <InputZap setValue={setValue} />
        <ButtonStart text="Praticar React" setPage={setPage} value={value}
          reset={false} />
      </div>
    </div>
  )
}
