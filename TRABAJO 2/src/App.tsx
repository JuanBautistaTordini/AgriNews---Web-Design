import { useState } from 'react'
import './App.css'

interface NewsCard {
  id: number
  image: string
  title: string
  link: string
}

export default function App() {
  const [newsCards] = useState<NewsCard[]>([
    {
      id: 1,
      image: "/placeholder.svg?height=200&width=400",
      title: "Apúntese a 3 cursos de inducción desde hoy",
      link: "#"
    },
    {
      id: 2,
      image: "/placeholder.svg?height=200&width=400",
      title: "50 aniversario del círculo ibérico",
      link: "#"
    }
  ])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 lg:bg-black lg:from-black lg:to-black lg:p-8">
      <div className="max-w-md mx-auto px-4 py-8 lg:bg-white lg:rounded-xl lg:shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gray-900 dark:bg-gray-800 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">AC</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 lg:text-gray-900">
            Bienvenidos a <span className="font-bold">agriNews Campus</span>
          </h1>
          <p className="text-sm text-gray-600 lg:text-gray-600 mt-2">
            Desde hoy puede consultar su perfil al link siguiente
          </p>
          <button className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors">
            Mi Perfil
          </button>
        </div>

        <div className="space-y-6">
          {newsCards.map((card) => (
            <div key={card.id} className="bg-white lg:bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src={card.image} 
                alt="" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-gray-900 lg:text-gray-900 mb-2">
                  {card.title}
                </h2>
                <a 
                  href={card.link}
                  className="text-teal-500 text-sm font-medium hover:text-teal-600"
                >
                  VER MÁS →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 lg:text-gray-900">
            ¿Empecemos ahora?
          </h2>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-sm font-light text-gray-500 lg:text-gray-500">
            Cancelar Suscripcion
          </h2>
        </div>
      </div>
    </div>
  )
}

