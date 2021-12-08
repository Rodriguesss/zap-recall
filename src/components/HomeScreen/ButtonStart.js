export default function ButtonStart({ text }) {
  return (
    <button className="buttonStart" onClick={() => alert('oi')}>
      {text}
      <img src="./assets/img/next.png" alt="Next" height="20" />
    </button>
  )
}