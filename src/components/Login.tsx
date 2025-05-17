'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import React from 'react'

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulación de login
    router.push("/menu")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#052A47]">
      <div className="flex w-full max-w-4xl h-[500px] bg-white rounded-xl overflow-hidden shadow-lg">
        {/* Lado izquierdo con imagen */}
        <div className="w-1/2 relative hidden md:block">
          <Image
            src="/img/Repartidor.png"
            alt="Decoración"
            fill
            className="object-cover"
          />
        </div>

        {/* Lado derecho con formulario */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          {/* Logo y título */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/img/Logo.png" alt="Logo" width={60} height={60} />
              <h1 className="text-xl font-bold text-[#052A47]">CourierSync</h1>
            </div>

            <h2 className="text-2xl font-semibold text-[#052A47] mb-2">Inicio de sesión</h2>
            <p className="text-gray-600 mb-6">Nos alegra verte de nuevo, ¡Vamos al siguiente paso!.</p>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Usuario</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#052A47]"
                  placeholder="Ingresa tu usuario"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Contraseña</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#052A47]"
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </div>

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-[#052A47] text-white px-6 py-2 rounded-md hover:bg-[#07406C] transition"
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>

          {/* Footer opcional */}
          <p className="text-xs text-gray-400 text-center mt-4">© Universidad de Antioquia | 2025 Code F@ctory</p>
        </div>
      </div>
    </div>
  )
}
