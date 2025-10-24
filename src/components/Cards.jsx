import React from 'react'

const Cards = (props) => {
  return (

    <div className='card w-70 h-80 bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center hover:scale-105'>
      <div className='top w-32 h-32 -mt-16'>
        <img src={props.image}
          alt=""
          className='w-full h-full rounded-full object-cover border-4 border-white shadow-lg hover:shadow-xl transition-shadow duration-300' />
      </div>
      <div className='middle text-center mt-0 flex-1 flex flex-col justify-center'>
        <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{props.title}</h3>
        <div className="text-sm text-gray-500 flex items-center justify-center gap-1 w-full">
          <span className="border-t border-b border-gray-300 py-2 flex-1 text-center font-medium">{props.calories}</span>
          <span className="w-1 h-1 bg-yellow-400 rounded-full shadow-sm"></span>
          <span className="border-t border-b border-gray-300 py-2 flex-1 text-center font-medium">{props.servings}</span>
        </div>
      </div>
      <div className='bottom w-full flex items-center justify-between mt-auto'>
        <h3 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">{props.price}</h3>
        <button className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">+</button>
      </div>
    </div>

  )
}

export default Cards