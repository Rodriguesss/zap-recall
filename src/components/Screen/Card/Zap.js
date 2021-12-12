import ZapItem from "./ZapItem"
import { zapStatus } from "../../../database/seed"

export default function Zap({ setTrigger, setDataIndex, value, count, setCount }) {
  return (
    <div className="zap">
      {
        zapStatus.map(({ message, color }) => (
          <ZapItem message={message} color={color} setTrigger={setTrigger}
            value={value} setDataIndex={setDataIndex} count={count}
            setCount={setCount} />
        ))
      }
    </div>
  )
}