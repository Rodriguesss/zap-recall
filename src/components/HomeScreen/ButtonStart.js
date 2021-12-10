import next from '../../assets/img/next.png'

export default function ButtonStart({ text, setPage }) {
  return (
    <button className="buttonStart" onClick={() => setPage('cardScreen')}>
      {text}
      <img src={next} alt="Next" height="20" />
    </button>
  )
}