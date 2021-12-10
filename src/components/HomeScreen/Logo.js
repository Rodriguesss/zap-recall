import logo from '../../assets/img/logo.png'

export default function Logo({ name }) {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" height="160" />
      <h1>{name}</h1>
    </div>
  )
}