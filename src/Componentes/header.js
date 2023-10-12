import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Header() {
  return (
    <header>
       <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand "  href="#">
          <img src={require('../imagenes/logoU.png')}
            alt="Logo"
            width="55"
            height="50" className=" d-inline-block"/>
            <span className="text-logo ">UNI</span>VALLE
          </a>
          
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi bi-three-dots-vertical"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gabinete Psicologico</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gabite Medico</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Campus Deportivo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contactos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
    
  );
}

export default Header;

