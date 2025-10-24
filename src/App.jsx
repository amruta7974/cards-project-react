import React from 'react'
import Cards from './components/Cards'




const App = () => {
  const arr = [
    {
      "id": 1,
      "title": "Fresh and Health Salad",
      "image": "https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "calories": "60 calories",
      "servings": "4 persons",
      "price": "$2.65"
    },
    {
      "id": 2,
      "title": "Mediterranean Quinoa Bowl",
      "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
      "calories": "85 calories",
      "servings": "2 persons",
      "price": "$3.25"
    },
    {
      "id": 3,
      "title": "Avocado Toast Deluxe",
      "image": "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
      "calories": "45 calories",
      "servings": "1 person",
      "price": "$1.95"
    },
    {
      "id": 4,
      "title": "Berry Smoothie Bowl",
      "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
      "calories": "120 calories",
      "servings": "1 person",
      "price": "$4.50"
    },
    {
      "id": 5,
      "title": "Grilled Chicken Wrap",
      "image": "https://images.unsplash.com/photo-1627799370307-9b2a689bb94f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
      "calories": "95 calories",
      "servings": "1 person",
      "price": "$3.75"
    },
    {
      "id": 6,
      "title": "Caesar Salad Supreme",
      "image": "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
      "calories": "75 calories",
      "servings": "3 persons",
      "price": "$2.85"
    }
  ]

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex flex-wrap gap-16 p-10">
      {arr.map(function (elem) {
        return <Cards key={elem.id} data={elem} title={elem.title} image={elem.image} calories={elem.calories} servings={elem.servings} price={elem.price} />
      })}
    </div>
  )
}

export default App