import { useState } from 'react'

function App() {

const saludar = ( ) => {
  alert()
}
  return (
      <div>
        <button>HOla</button>
          <Titulo/>
          <Titulo/>
          <Titulo/>

      </div>
        
  )
}
/*
COMPONENTES
-Las funciones que devuelven HTML (o mejor ducho JSX) las llamaremos componentes
-Los componentes deben ser llamados en mayusculas
-Los componentes pueden ser creados con function o arrow function
-Para retornar JSX (html) se recomienta poner return (salto de linea)
-Para usar el componente debemos llamarlo donde o queramos usar pero como si fura una etiqueta
*/

const Titulo = () =>{
  return(
    <h1>Soy un titulo</h1>
  )
}
export default App
