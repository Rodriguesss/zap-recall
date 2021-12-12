import emojiHappy from '../../../assets/img/party.png'
import emojiSad from '../../../assets/img/sad.png'

export default function Title({ title, win }) {
  return (
    <h1>{title} <img src={win ? emojiHappy : emojiSad} alt="Emoji comemorando" /></h1>
  )
}