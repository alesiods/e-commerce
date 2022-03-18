import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from "../CartWidget"

const NavBar = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <div class="container">
          <Link class="navbar-brand" to="/">TIENDA</Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link class="nav-link" to="/">Productos</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/nosotros">Nosotros</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="contacto">Contacto</Link>
              </li>
            </ul>
          </div>
          <Link to="/carrito"><CartWidget/></Link>   
        </div>
      </nav>      
    </header>
  )
}

export default NavBar