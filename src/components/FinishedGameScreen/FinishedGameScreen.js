import Title from './Title';
import Message from './Message';

export default function FinishedGameScreen({ data }) {
  return (
    <div>
      <Title title={data.title} />
      <Message message={data.message} />
    </div>
  )
}