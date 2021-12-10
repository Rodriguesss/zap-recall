import ZapItem from "./ZapItem"

export default function Zap({ setTrigger, handleFinishedGame }) {
  const zapStatus = [
    { message: 'Aprendi agora', color: 'black', correct: true },
    { message: 'Não lembrei', color: 'red', correct: false },
    { message: 'Lembrei com esforço', color: 'green', correct: true },
    { message: 'Zap!', color: 'yellow', correct: true }
  ]

  return (
    <div className="zap">
      {
        zapStatus.map(({ message, color }) => (
          <ZapItem message={message} color={color} setTrigger={setTrigger} handleFinishedGame={handleFinishedGame} />
        ))
      }
    </div>
  )
}