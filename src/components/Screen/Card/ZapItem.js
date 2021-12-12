export default function ZapItem({ message, color, setTrigger,
  setFinishedDataIndex, value, count, setCount }) {

  function checkZap() {
    setTrigger('zap', color)
    addCount()
    showWin()
  }

  function addCount() {
    color === 'yellow' && checkLastZap()
  }

  function showWin() {
    count >= value && setFinishedDataIndex(1)
  }

  function checkLastZap() {
    (value - 1) === count && setFinishedDataIndex(1)
    setCount(count + 1)
  }

  return (
    <div className={`zap-item border ${color}`} onClick={checkZap}>
      <p>{message}</p>
    </ div>
  )
}