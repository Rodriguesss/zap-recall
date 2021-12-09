export default function ButtonStart({ text, setPage }) {
  return (
    <button className="buttonStart" onClick={() => setPage('cardScreen')}>
      {text}
      <img src="./assets/img/next.png" alt="Next" height="20" />
    </button>
  )
}