export default function Logo({ name, pathImage }) {
  return (
    <div className="logo">
      <img src={pathImage} alt="Logo" height="160" />
      <h1>{name}</h1>
    </div>
  )
}