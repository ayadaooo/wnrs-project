function Card({ question }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-12 max-w-xl min-h-48">
      <p className="text-4xl text-center font-bold font-mono">{question}</p>
    </div>
  )
}

export default Card