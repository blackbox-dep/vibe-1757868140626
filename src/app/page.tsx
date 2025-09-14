"use client"

import { Button } from "@/components/ui/button"

export default function Home() {
  const handleClick = () => {
    alert("Black button clicked!")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple Black Button
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            A clean, modern black button component built with Next.js and Tailwind CSS
          </p>
        </div>
        
        <div className="space-y-4">
          <Button
            onClick={handleClick}
            className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Click Me
          </Button>
          
          <div className="text-sm text-gray-500">
            Try clicking the button above!
          </div>
        </div>
      </div>
    </div>
  )
}