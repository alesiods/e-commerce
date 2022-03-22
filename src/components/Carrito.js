import React, { useContext } from 'react'
import { contexto } from './Contexto/CartContext'


const Carrito = () => {

  const {carrito,removeItem, clear} = useContext(contexto)
  console.log(carrito)

  return (
    <div>
      <h2>Articulos seleccionados:</h2>
        <div className="container">
          <div className="row">
            {carrito.map(producto =>(
            <div className="col-xl-3 col-6">
              <div className="card mt-5 text-center">
              <div key={producto.id}>
                <p>{producto.nombre}</p>
                <p>{producto.cantidad} x {producto.precio}</p>
                <p>Total Parcial: {producto.cantidad * producto.precio}</p>
                <button onClick={() => removeItem(producto.id)} className="btn btn-warning mb-2">Eliminar</button>
              </div>
              </div>
            </div>
      ))}
          </div>
        </div>
    <div className='text-center'>
      {carrito!= 0 ?(<button onClick={clear} className="btn btn-danger mt-5 mb-5">Limpiar carrito</button>) : (<button className='noMostrar'></button> )}
    </div>
      
      
    </div>
  )
}

export default Carrito