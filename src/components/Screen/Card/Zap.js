import ZapItem from "./ZapItem"
import { zapStatus } from "../../../database/seed"

export default function Zap({ setTrigger, setFinishedDataIndex, value, count, setCount }) {
  return (
    <div className="zap">
      {
        zapStatus.map(({ message, color }) => (
          <ZapItem message={message} color={color} setTrigger={setTrigger}
            setFinishedDataIndex={setFinishedDataIndex} value={value} count={count}
            setCount={setCount} />
        ))
      }
    </div>
  )
}