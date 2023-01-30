import React from 'react'
import shekil from '../assets/images/logo.svg'
import './Navbar.css'

const Navbar = () => {

  // JSX elementleri icerisinde deyisen {} fiqurlu moterize icinde yazilir

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src={shekil} alt="" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Service</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link">Contact</a>
          </li>
        </ul>
<a class='btn btn-priamry'>Sign in</a>
        
       
      </div>
    </div>
  </nav>
  )
}

export default Navbar