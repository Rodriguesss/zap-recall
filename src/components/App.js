import HomeScreen from './HomeScreen/HomeScreen'

import { useState } from 'react'

export default function App() {
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(HomeScreen())

  return (
    <>
      {currentPage}
    </>
  )
}
