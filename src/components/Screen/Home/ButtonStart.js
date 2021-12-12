import next from '../../../assets/img/next.png'

export default function ButtonStart({ text, setPage }) {
  return (
    <button className="buttonStart" onClick={() => setPage('card')} data-identifier="start-zap-recall">
      {text}
      <img src={next} alt="Next" height="20" />
    </button>
  )
}