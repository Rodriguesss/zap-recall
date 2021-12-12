import Header from '../../Generic/Header'
import Container from '../../Generic/Container'
import Title from './Title'
import Message from './Message'
import Button from '../../Generic/Button'

export default function Index({ data: { title, message, win }, setPage,
  setFinishedDataIndex, setCount, setValue }) {
  return (
    <Container>
      <Header />
      <div className="finish">
        <Title title={title} win={win} />
        <Message message={message} />
        <Button text="Tentar novamente" setPage={setPage} value={0}
          reset={true} setFinishedDataIndex={setFinishedDataIndex}
          setCount={setCount} setValue={setValue} />
      </div>
    </Container>
  )
}