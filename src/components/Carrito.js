import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './Contexto/CartContext'


const Carrito = () => {

  const {carrito,removeItem, clear, calcTotal} = useContext(contexto)
  console.log(carrito)

  return (
    <div>
      {carrito != 0 ? (<>
                        <div className="container">
                          <div className="row">
                            {carrito.map(producto =>(
                            <div className="col-xl-3 col-6">
                              <div className="card mt-5 text-center">
                              <div key={producto.id}>
                                <p className="negrita">{producto.nombre}</p>
                                <p>{producto.cantidad} x ${producto.precio}</p>
                                <p>Total Parcial: ${producto.cantidad * producto.precio}</p>
                                <button onClick={() => removeItem(producto.id)} className="btn btn-warning mb-2">Eliminar</button>
                              </div>
                              </div>
                            </div>))}
                          </div>
                        </div>
                        <div className='text-center mt-5'> 
                        <p className="negrita tamanioLetra">Total Compra: ${calcTotal()}</p>
                        <button onClick={clear} className="btn btn-danger  mb-5">Limpiar carrito</button> 
                        </div>
                      </>) : 
      (<div className=' text-center'>
          <h2 className='mt-5'>No hay productos en tu carrito!!</h2>
          <Link to="/" className="btn btn-warning mt-5">Comprar un producto</Link>
      </div>)}
    </div>
  )
}

export default Carrito