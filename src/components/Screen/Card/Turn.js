import turn from '../../../assets/img/turn.png'

export default function Turn({ setTrigger, flag }) {
  return (
    <div className="turn" data-identifier="arrow">
      <img src={turn} alt="Seta para virar" height="38" width="35"
        onClick={() => setTrigger(flag ? 'count' : 'flag')} />
    </div>
  )
}