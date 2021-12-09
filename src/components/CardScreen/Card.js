import Total from './Total'
import Content from './Content'
import Turn from './Turn'

export default function Card() {
  return (
    <div className="card">
      <Total current="1" total="8" />
      <Content />
      <Turn />
    </div>
  )
}