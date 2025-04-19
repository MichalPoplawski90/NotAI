'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Wystąpił błąd</h1>
      <p className="text-xl text-gray-600 mb-8">{error.message}</p>
      <Button onClick={() => reset()}>
        Spróbuj ponownie
      </Button>
    </div>
  )
} 