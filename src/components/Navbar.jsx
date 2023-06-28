import React, { useRef } from 'react'
import shekil from '../assets/images/logo.svg'
import './Navbar.css'
import Button from './Button'
import {AiOutlineBars} from 'react-icons/ai'
import {GiCrossedSwords} from 'react-icons/gi'

import { Link } from 'react-router-dom'

const Navbar = () => {

  // JSX elementleri icerisinde deyisen {} fiqurlu moterize icinde yazilir

const overlayMenuUnvaniRef = useRef()

const openOverlayMenu = (e) => {
const kliknenenElement = e.target
if(kliknenenElement.classList.contains('bars-icon')) {

  overlayMenuUnvaniRef.current.classList.add('aktiv')
}

}

const closeOverlayMenu = (e) => {
  const kliknenenElement = e.target
  if(kliknenenElement.classList.contains('cross-icon'))
  overlayMenuUnvaniRef.current.classList.remove('aktiv')
}

  return (
<>

    <div className='overlay' ref ={overlayMenuUnvaniRef}>
<GiCrossedSwords className='cross-icon' onClick={closeOverlayMenu} />

<div className="nav-links">
  <a href="">Home</a>
  <a href="">About</a>
  <a href="">Service</a>
  <a href="">Project</a>
</div>

    </div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <className className="navbar-brand" href="#"><img src={shekil} alt="" /></className>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <AiOutlineBars className='bars-icon' onClick={openOverlayMenu} />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Xidmetlerimiz">Service</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Bloglar">Blog</Link>
          </li>
          
          <li className="nav-item">
            <a className="nav-link">Contact</a>
          </li>
        </ul>

        <Button butonunIcindekiYazi="Sign Up" className="btn btn-danger"/>
       
      </div>
    </div>
  </nav>
</>

  )
}

export default Navbar