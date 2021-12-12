export default function Content({ question, answer, flag, css }) {
  return (
    <h2 className={css}>{flag ? answer : question}</h2>
  )
}