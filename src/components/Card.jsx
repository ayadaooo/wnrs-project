function Card({ question }) {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-12 w-xl h-80 flex items-center justify-center">
      <p className="text-3xl text-red-800 text-center font-bold uppercase ">{question}</p>
    </div>
  )
}

export default Card