import Total from './Total'
import Content from './Content'
import Turn from './Turn'
import Zap from './Zap'

export default function Card({ flag, turnFlag, setTrigger, question, answer, current, total, css, setIndice }) {
  return (
    <div className={`card ${css && `border ${css} ${css}-shadow`}`}>
      <Total current={current} total={total} />
      <Content
        question={question}
        answer={answer}
        flag={flag}
        css={flag ? '' : 'bold'} />
      {turnFlag ? <Zap setTrigger={setTrigger} setIndice={setIndice} /> : <Turn setTrigger={setTrigger} flag={flag} />}
    </ div>
  )
}