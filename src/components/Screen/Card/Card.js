import Total from './Total'
import Content from './Content'
import Turn from './Turn'
import Zap from './Zap'

export default function Card({ flag, turnFlag, setTrigger, question, answer,
  current, total, css, setFinishedDataIndex, value, count, setCount }) {
  return (
    <div className={`card ${css && `border ${css} ${css}-shadow`}`}
      data-identifier="flashcard">
      <Total current={current} total={total} />
      <Content
        question={question}
        answer={answer}
        flag={flag}
        css={flag ? '' : 'bold'} />
      {turnFlag
        ? <Zap setTrigger={setTrigger} setFinishedDataIndex={setFinishedDataIndex} value={value}
          count={count} setCount={setCount} />
        : <Turn setTrigger={setTrigger} flag={flag} />}
    </ div>
  )
}