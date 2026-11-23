function Card({ question }) {
  return (
    <div className="bg-white rounded-xl shadow-xl p-12 w-xl h-80 flex items-center justify-center hover:shadow-2xl transition duration-200">
      <p className="text-3xl text-red-800 text-center font-bold uppercase ">{question}</p>
    </div>
  )
}

export default Card