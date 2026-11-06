import { useState, useEffect } from 'react'
import { cardsByLevel } from './data/cards'
import Card from './components/Card'

function App() {
  const [currentLevel, setCurrentLevel] = useState(() => {
  const saved = localStorage.getItem("wnrsProgress")
  if (saved) {
    return JSON.parse(saved).currentLevel
  }
  return 1
})
  const [currentIndex, setCurrentIndex] = useState(() => {
  const saved = localStorage.getItem("wnrsProgress")
  if (saved) {
    return JSON.parse(saved).currentIndex
  }
  return 0
})

  useEffect(() => {
    localStorage.setItem('wnrsProgress', JSON.stringify({ currentLevel, currentIndex }))
  },[currentLevel, currentIndex]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowRight") {
        nextCard()
      } else if (e.key === "ArrowLeft") {
        prevCard()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const nextLevel = () => {
    setCurrentLevel(currentLevel + 1)
    setCurrentIndex(0)
  }
  const prevLevel = () => {
    setCurrentLevel(currentLevel - 1)
    setCurrentIndex(0)
  }
    const nextCard = () => {
  setCurrentIndex(prev => prev + 1)
}
  const prevCard = () => {
    setCurrentIndex(current => current - 1)
  }
  const resetGame = () => {
    setCurrentLevel(1)
    setCurrentIndex(0)
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-red-800 ">We're Not Really Strangers</h1>
      <h2 className="text-2xl font-bold text-gray-800 ">LEVEL {currentLevel}</h2>
      <div className="flex gap-4">
      <button className="bg-red-500 hover:bg-red-900 hover:scale-105 active:scale-95 transition text-white font-bold py-2 px-4 rounded disabled:opacity-40 disabled:cursor-not-allowed" onClick={prevLevel} disabled={currentLevel === 1}>
        PREVIOUS LEVEL
      </button>
      <button className="bg-red-500 hover:bg-red-900 hover:scale-105 active:scale-95 transition text-white font-bold py-2 px-4 rounded disabled:opacity-40 disabled:cursor-not-allowed" onClick={nextLevel} disabled={currentLevel === 3}>
        NEXT LEVEL
      </button>
      <button className="bg-red-500 hover:bg-red-900 hover:scale-105 active:scale-95 transition text-white font-bold py-2 px-4 rounded" onClick={resetGame}>
        RESET GAME
      </button>
      </div>
      <Card question={cardsByLevel[currentLevel][currentIndex]} />
      <div className="flex gap-4">
        <button className="bg-red-500 hover:bg-red-900 hover:scale-105 transition active:scale-95 text-white font-bold py-2 px-4 rounded disabled:opacity-40 disabled:cursor-not-allowed" onClick={prevCard} disabled={currentIndex === 0}>
          PREVIOUS
        </button>
        <button className="bg-red-500 hover:bg-red-900 hover:scale-105 transition active:scale-95 text-white font-bold py-2 px-4 rounded disabled:opacity-40 disabled:cursor-not-allowed" onClick={nextCard} disabled={currentIndex === cardsByLevel[currentLevel].length - 1}>
          NEXT
        </button>
      </div>
    </div>
  )
}

export default App
