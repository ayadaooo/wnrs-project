import { useState } from 'react'
import { cards } from './data/cards'
import Card from './components/Card'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(1)
  const nextCard = () => {
    setCurrentIndex(currentIndex + 1)
  }
  const prevCard = () => {
    setCurrentIndex(currentIndex - 1)
  }
  const nextLevel = () => {
    setCurrentLevel(currentLevel + 1)
    setCurrentIndex(0)
  }
  const prevLevel = () => {
    setCurrentLevel(currentLevel - 1)
    setCurrentIndex(0)
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-red-800 ">We're Not Really Strangers</h1>
      <h2 className="text-2xl font-bold text-gray-800 ">LEVEL {currentLevel}</h2>
      <div className="flex gap-4">
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-40 disabled:cursor-not-allowed" onClick={prevLevel} disabled={currentLevel === 1}>
        PREVIOUS LEVEL
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-40 disabled:cursor-not-allowed" onClick={nextLevel} disabled={currentLevel === 3}>
        NEXT LEVEL
      </button>
      </div>
      <Card question={cards[currentIndex]} />
      <div className="flex gap-4">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-40 disabled:cursor-not-allowed" onClick={prevCard} disabled={currentIndex === 0}>
          PREVIOUS
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-40 disabled:cursor-not-allowed" onClick={nextCard} disabled={currentIndex === cards.length - 1}>
          NEXT
        </button>
      </div>
    </div>
  )
}

export default App
