export default function ZapItem({ message, color, setTrigger, handleFinishedGame }) {

  function checkZap() {
    setTrigger('zap', color)
    color === 'red' && handleFinishedGame('finishedGameScreen2')
  }

  return (
    <div className={`zap-item border ${color}`} onClick={() => checkZap()}>
      <p>{message}</p>
    </ div>
  )
}