import Header from '../../Generic/Header'
import Container from '../../Generic/Container'
import Title from './Title'
import Message from './Message'
import ButtonStart from '../../Generic/ButtonStart'

export default function Index({ data: { title, message, win }, setPage,
  setDataIndex, setCount }) {
  return (
    <Container>
      <Header />
      <div className="finish">
        <Title title={title} win={win} />
        <Message message={message} />
        <ButtonStart text="Tentar novamente" setPage={setPage} value={0}
          reset={true} setDataIndex={setDataIndex} setCount={setCount} />
      </div>
    </Container>
  )
}