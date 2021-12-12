import Logo from './Logo'
import InputZap from './InputZap'
import ButtonStart from './ButtonStart'

export default function Index({ setPage }) {
  return (
    <div className="container">
      <Logo />
      <div>
        <InputZap />
        <ButtonStart text="Praticar React" setPage={setPage} />
      </div>
    </div>
  )
}
