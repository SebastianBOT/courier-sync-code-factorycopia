"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RegistroForm() {
  const [exito, setExito] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setExito(true);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-[#FFFFFF] p-8 rounded-xl shadow-2xl text-white"
      >
        <h1 className="text-green-600 text-3xl font-bold mb-6 transition duration-300 hover:text-teal-300">
          Registro de Envío
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {[
            "Nombre",
            "Número de documento",
            "Ciudad de origen",
            "Ciudad de destino",
            "Dirección",
            "Teléfono",
            "Peso",
            "Dimensiones",
          ].map((placeholder) => (
            <input
              key={placeholder}
              className={`p-3 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:scale-105 hover:shadow-lg ${
                placeholder === "Dirección" ? "md:col-span-2" : ""
              }`}
              type="text"
              placeholder={placeholder}
              required
            />
          ))}

          <div className="md:col-span-2 flex justify-end mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-white text-[#052A47] px-6 py-2 rounded font-semibold transition duration-300 hover:bg-gray-200 cursor-pointer shadow-md"
            >
              Enviar solicitud
            </motion.button>
          </div>
        </form>

        {exito && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 font-semibold mt-6 text-right"
          >
            El envío se registró de manera exitosa.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
