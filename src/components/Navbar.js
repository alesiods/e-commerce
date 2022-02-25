import React from 'react'
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <div class="container">
          <a class="navbar-brand" href="#">TIENDA</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>  
            <CartWidget/>
        </div>
      </nav>      
    </header>
  )
}

export default NavBar