import Header from '../../Generic/Header'
import Container from '../../Generic/Container'
import Title from './Title'
import Message from './Message'

export default function Index({ data: { title, message, win } }) {
  return (
    <Container>
      <Header />
      <div class="finish">
        <Title title={title} win={win} />
        <Message message={message} />
      </div>
    </Container>
  )
}