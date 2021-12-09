export default function Turn({ setTrigger, flag }) {
  return (
    <div>
      <img src="./assets/img/turn.png" alt="Seta para virar" height="38" width="35"
        onClick={() => setTrigger(flag ? 'count' : 'flag')} />
    </div>
  )
}