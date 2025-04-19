import { Button } from "@/components/ui/button"
import { PlusCircle, FileText, ChevronRight, Search, Calendar, Bell } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-blue-600">NotAI</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Szukaj projektu..."
                className="w-64 pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Button variant="ghost" size="icon">
              <Calendar className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center pl-4 border-l">
              <div className="w-9 h-9 rounded-full flex items-center justify-center border-2 border-blue-500 bg-white">
                <span className="font-semibold text-sm">
                  <span className="text-blue-900">M</span><span className="text-blue-500">P</span>
                </span>
              </div>
              <div className="ml-2 leading-tight">
                <div className="text-xs text-gray-500">notariusz</div>
                <div className="font-medium text-gray-700 -mt-0.5">Michał Popławski</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Projekty w toku</h2>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-800">
              Zobacz wszystkie
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-4 gap-6">
            {/* Project Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div className="p-2 rounded-md bg-blue-50">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-500">14.04.2025</span>
                </div>
                <h3 className="mt-4 font-semibold text-gray-800 truncate">Umowa sprzedaży nieruchomości</h3>
                <p className="mt-1 text-sm text-gray-500">Klient: Jan Nowak</p>
                
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Postęp</span>
                    <span className="font-medium">67%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className="bg-blue-600 h-1.5 rounded-full" 
                      style={{ width: "67%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* New Project Button */}
            <Button 
              variant="outline" 
              className="h-full flex flex-col items-center justify-center p-8 border-dashed hover:border-blue-500"
            >
              <PlusCircle className="h-10 w-10 text-blue-600 mb-4" />
              <span className="text-sm text-gray-600">Nowy projekt aktu notarialnego</span>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
} 