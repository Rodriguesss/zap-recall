import ZapItem from "./ZapItem"
import { zapStatus } from "../../../database/seed"

export default function Zap({ setTrigger, setIndice }) {
  return (
    <div className="zap">
      {
        zapStatus.map(({ message, color }) => (
          <ZapItem message={message} color={color} setTrigger={setTrigger} setIndice={setIndice} />
        ))
      }
    </div>
  )
}