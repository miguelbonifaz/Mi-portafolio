'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export default function ProjectNotFound() {
  return (
    <>
      <Header />
      <main className="flex-grow w-full flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="serif-font text-4xl md:text-6xl text-gray-900 animate-fade-in-up">
            Proyecto no encontrado
          </h1>
          <p className="text-gray-600 animate-fade-in-up delay-100">
            Lo sentimos, el proyecto que buscas no existe o ha sido movido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link
              href="/#works"
              className="group inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gray-900 text-white text-sm uppercase tracking-widest smooth-color hover:bg-gray-700 hover-lift"
            >
              <ArrowLeft className="w-4 h-4 smooth-color group-hover:-translate-x-1" />
              <span>Volver a Trabajos</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-900 text-sm uppercase tracking-widest smooth-color hover:bg-gray-50 hover-lift"
            >
              Ir al Inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

