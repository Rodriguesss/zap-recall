import Logo from './Logo'
import InputZap from './InputZap'
import ButtonStart from './ButtonStart'

export default function HomeScreen() {
  return (
    <div className="container">
      <Logo pathImage="./assets/img/logo.png" />
      <div>
        <InputZap />
        <ButtonStart text="Praticar React" />
      </div>
    </div>
  )
}