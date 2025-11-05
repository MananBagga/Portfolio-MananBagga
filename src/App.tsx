import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-8">Manan Portfolio</h1>
        <p className="text-xl text-gray-300 mb-8">
          Built with Vite + React + Tailwind CSS
        </p>
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Count is {count}
          </button>
          <p className="text-gray-400 mt-4">
            Edit{' '}
            <code className="bg-gray-700 px-2 py-1 rounded">src/App.tsx</code>{' '}
            to get started
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
