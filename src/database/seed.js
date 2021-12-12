export const decks = [
  {
    name: 'React',
    data: [
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
    ]
  },
  {
    name: 'Javascript',
    data: [
      {
        question: 'Para acessar um elemento HTML de JavaScript, você pode usar qual método',
        answer: `getElementById`
      },
      {
        question: `Separa as declarações javascript, adicionando ao final de cada instrução executável.. Torna possível escrever muitas instruções em uma linha.`,
        answer: `;`
      },
      {
        question: 'Quais são os 2 valores que os booleanos podem ter?',
        answer: `True e Falso`
      },
    ]
  }
]

export const finishedData = [
  { title: 'Putz..', message: 'Você esqueceu alguns flashcards.. Não desanime! Na próxima você consegue!', win: false },
  { title: 'PARABÉNS!', message: 'Você não esqueceu de nenhum flashcard!', win: true }
]

export const zapStatus = [
  { message: 'Aprendi agora', color: 'black' },
  { message: 'Não lembrei', color: 'red' },
  { message: 'Lembrei com esforço', color: 'green' },
  { message: 'Zap!', color: 'yellow' }
]