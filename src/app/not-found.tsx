import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Strona nie została znaleziona</p>
      <Button asChild>
        <Link href="/">
          Powrót do strony głównej
        </Link>
      </Button>
    </div>
  )
} 