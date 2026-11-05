import { useState } from 'react'
import { cards } from './data/cards'
import Card from './components/Card'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const nextCard = () => {
    setCurrentIndex(currentIndex + 1)
  }
  const prevCard = () => {
    setCurrentIndex(currentIndex - 1)
  }
  return (
    <div>
      <h1>WNRS Cards</h1>
      <Card question={cards[currentIndex]} />
      <div>
        <button onClick={prevCard} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={nextCard} disabled={currentIndex === cards.length - 1}>
          Next
        </button>
      </div>
    </div>
  )
}

export default App
