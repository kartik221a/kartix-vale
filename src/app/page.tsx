'use client'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white gap-8 p-4">
      <h1 className="text-6xl font-bold tracking-tight">
        Hey <span className="text-amber-400">Kartik</span> 👋
      </h1>
      <p className="text-lg text-gray-400">Welcome to your simple demo site</p>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-red-600/40 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        ▶ Go to YouTube
      </a>
    </div>
  )
}
