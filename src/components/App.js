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
    },
    {
      question: 'Podemos colocar __ dentro do JSX',
      answer: `expressões`
    },
    {
      question: 'O ReactDOM nos ajuda __',
      answer: `interagindo com a DOM para colocar componentes React na mesma`
    },
    {
      question: 'Usamos o npm para __',
      answer: `gerenciar os pacotes necessários e suas dependências`
    },
    {
      question: 'Usamos props para __',
      answer: `passar diferentes informações para componentes`
    },
    {
      question: 'Usamos estado (state) para __',
      answer: `dizer para o React quais informações quando atualizadas devem renderizar a tela novamente`
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

