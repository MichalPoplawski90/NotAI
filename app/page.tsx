'use client';

import React, { useState, useId } from 'react';
import { PlusCircle, FileText, ChevronRight, Search, Calendar, Bell } from 'lucide-react';

const NotAILogo = () => {
  const gradientId = useId();
  
  return (
    <svg width="210" height="56" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "-10px" }}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2b6cb0" />
          <stop offset="100%" stopColor="#4299e1" />
        </linearGradient>
      </defs>
      
      <rect x="75" y="20" width="150" height="45" rx="22.5" fill="#f8fafc" />
      <text x="90" y="52" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="700" fontSize="36" letterSpacing="-1" fill="#2c5282">Not</text>
      <text x="153" y="52" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="700" fontSize="36" letterSpacing="-1" fill={`url(#${gradientId})`}>AI</text>
      <rect x="75" y="20" width="150" height="45" rx="22.5" fill="none" stroke={`url(#${gradientId})`} strokeWidth="1.5" />
      <circle cx="206" cy="42" r="6" fill={`url(#${gradientId})`} />
      <circle cx="206" cy="42" r="3" fill="white" />
    </svg>
  );
};

export default function Home() {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Umowa sprzedaży nieruchomości', client: 'Jan Nowak', date: '14.04.2025', progress: 67 },
    { id: 2, title: 'Akt poświadczenia dziedziczenia', client: 'Anna Kowalska', date: '12.04.2025', progress: 85 },
    { id: 3, title: 'Umowa darowizny', client: 'Paweł Wiśniewski', date: '10.04.2025', progress: 42 }
  ]);
  
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  
  const documentTypes = [
    { id: 'sale', name: 'Umowa sprzedaży' },
    { id: 'donation', name: 'Umowa darowizny' },
    { id: 'inheritance', name: 'Akt poświadczenia dziedziczenia' },
    { id: 'enforcement', name: 'Akt z rygorem natychmiastowej wykonalności (art. 777 KPC)' },
    { id: 'testament', name: 'Testament' },
    { id: 'power_of_attorney', name: 'Pełnomocnictwo' },
    { id: 'protocol', name: 'Protokół' },
    { id: 'company', name: 'Akt założycielski spółki' },
    { id: 'other', name: 'Inny typ aktu' }
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <NotAILogo />
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
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Kalendarz">
              <Calendar className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Powiadomienia">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
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
            <div className="flex space-x-2">
              <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                Zobacz wszystkie
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div className="p-2 rounded-md bg-blue-50">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-800 truncate">{project.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">Klient: {project.client}</p>
                  
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Postęp</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-blue-600 h-1.5 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* New Project Tile */}
            <div 
              onClick={() => setShowNewProjectModal(true)}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer flex flex-col items-center justify-center"
            >
              <div className="p-8 flex flex-col items-center">
                <div className="p-3 rounded-full bg-blue-50">
                  <PlusCircle className="h-10 w-10 text-blue-600" />
                </div>
                <p className="mt-4 text-sm text-gray-600 text-center">Nowy projekt aktu notarialnego</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Documents Section */}
        <section className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Ostatnio ukończone</h2>
            <div className="flex space-x-2">
              <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                Zobacz wszystkie
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tytuł
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Klient
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data zakończenia
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Testament notarialny</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">Maria Kwiatkowska</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">09.04.2025</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Ukończony
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Umowa sprzedaży lokalu mieszkalnego</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">Piotr Zieliński</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">05.04.2025</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Ukończony
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      
      {/* New Project Modal */}
      {showNewProjectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Wybierz typ aktu notarialnego</h3>
              <p className="text-sm text-gray-600 mb-6">
                Wybór typu aktu pomoże aplikacji lepiej dostosować projekt do Twoich potrzeb
              </p>
              
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {documentTypes.map(type => (
                  <button
                    key={type.id}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors flex items-center justify-between"
                  >
                    <span className="font-medium text-gray-800">{type.name}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                ))}
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button 
                  onClick={() => setShowNewProjectModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Anuluj
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Rozpocznij bez wyboru
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 