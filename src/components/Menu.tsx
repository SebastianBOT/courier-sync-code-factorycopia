'use client'

import { useRouter } from 'next/navigation'
import { FaBoxes, FaShippingFast } from 'react-icons/fa'
import Image from 'next/image'
import React from 'react'

export default function MenuPage() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute w-[496px] h-[509px] top-[463px] left-[-184px] rotate-[-30.2deg]">
        <Image src="/img/Figura1.png" alt="Figura 1" fill className="object-contain" />
      </div>
      <div className="absolute w-[496px] h-[509px] top-[963.21px] left-[-183px] rotate-[30.29deg]">
        <Image src="/img/Figura2.png" alt="Figura 2" fill className="object-contain" />
      </div>
      <div className="absolute w-[537.03px] h-[286.84px] top-[842px] left-[959px] rotate-[-26.93deg]">
        <Image src="/img/Figura3.png" alt="Figura 3" fill className="object-contain" />
      </div>
      <div className="absolute w-[537.03px] h-[286.84px] top-[844.93px] left-[959px] rotate-[7.52deg]">
        <Image src="/img/Figura4.png" alt="Figura 4" fill className="object-contain" />
      </div>
      <div className="absolute w-[496px] h-[509px] top-[767.19px] left-[1072.74px] rotate-[17.41deg]">
        <Image src="/img/Figura5.png" alt="Figura 5" fill className="object-contain" />
      </div>

      {/* Contenedor central */}
      <div className="relative z-10 bg-[#052A47] text-white p-10 rounded-xl w-full max-w-md shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-8">Menú</h1>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => router.push('/inventario')}
            className="bg-white text-[#052A47] hover:bg-gray-100 px-6 py-3 rounded-lg flex items-center justify-center gap-3 text-lg font-medium transition"
          >
            <FaBoxes className="text-2xl" />
            Consultar inventario
          </button>

          <button
            onClick={() => router.push('/registro')}
            className="bg-white text-[#052A47] hover:bg-gray-100 px-6 py-3 rounded-lg flex items-center justify-center gap-3 text-lg font-medium transition"
          >
            <FaShippingFast className="text-2xl" />
            Registrar envío
          </button>
        </div>
      </div>
    </div>
  )
}
