import Total from './Total'
import Content from './Content'
import Turn from './Turn'

export default function Card({ flag, setTrigger, question, answer, current, total }) {
  console.log(flag)
  return (
    <div className="card">
      <Total current={current} total={total} />
      <Content
        question={question}
        answer={answer}
        flag={flag}
        css={flag ? '' : 'bold'} />
      <Turn setTrigger={setTrigger} flag={flag} />
    </div>
  )
}