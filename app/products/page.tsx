import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function productsPage() {

    console.log("desde el servidor")
  return (
    <div>
        <Sidebar/>
        <p>Hola desde page con esta nueva ruta </p>
    </div>
  )
}
