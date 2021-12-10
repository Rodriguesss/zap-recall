import { useState } from 'react'
import HomeScreen from './HomeScreen/HomeScreen'
import CardScreen from './CardScreen/CardScreen'
import FinishedGameScreen from './FinishedGameScreen/FinishedGameScreen'

export default function App() {
  const [data, setData] = useState([
    {
      question: 'O que é JSX?',
      answer: `Uma extensão de linguagem do JavaScriptsdkfslçdfsl
      ssssssssssssssssssssssssssssssssssssssssssssssssssss d`
    },
    {
      question: 'O React é __',
      answer: `uma biblioteca JavaScript para construção de interfaces`
    },
    {
      question: 'Componentes devem iniciar com __',
      answer: `letra maiúscula`
    }
  ])

  const [finishedData, setFinishedData] = useState([
    { title: 'Parabéns!', message: 'Você não esqueceu de nenhum flashcard!' },
    { title: 'Putz..', message: 'Você esqueceu alguns flashcards.. Não desanime! Na próxima você consegue!' }
  ])

  const [game, setGame] = useState('finishedGameScreen1')

  function handleFinishedGame(page) {
    setGame(page)
  }

  function renderFinishedGame() {
    setScreen(game)
  }

  const [componentPage, setComponentPage] = useState(
    {
      homeScreen: <HomeScreen setPage={handleManagePages} />,
      cardScreen: <CardScreen data={data} setGame={renderFinishedGame} handleFinishedGame={handleFinishedGame} />,
      finishedGameScreen1: <FinishedGameScreen data={finishedData[0]} />,
      finishedGameScreen2: <FinishedGameScreen data={finishedData[1]} />
    },
  )

  const [screen, setScreen] = useState('homeScreen')

  function handleManagePages(currentPage) {
    setScreen(currentPage)
  }

  return (
    <>
      {componentPage[screen]}
    </>
  )
}

