function Card({ question }) {
  return (
    <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition duration-200 w-full max-w-xl p-6 md:p-12 h-80 flex items-center justify-center">
      <p className="text-3xl text-red-800 text-center font-bold uppercase ">{question}</p>
    </div>
  )
}

export default Card