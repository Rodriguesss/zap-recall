export default function ZapItem({ message, color, setTrigger, setIndice }) {

  function checkZap() {
    setTrigger('zap', color)
    color === 'red' && setIndice(1)
  }

  return (
    <div className={`zap-item border ${color}`} onClick={() => checkZap()}>
      <p>{message}</p>
    </ div>
  )
}