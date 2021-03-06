import React from 'react'
import Tarjetas from "../components/Tarjetas"

export default function HomeView() {
  return (
    <div className="mt-4">
      <h1 className="display-6 mb-3">
        Catálogo
      </h1>
      <Tarjetas />
    </div>
  )
}
