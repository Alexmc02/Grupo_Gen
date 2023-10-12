import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Requisitos() {
    return (
       
        
        <div className="card-group">
            <div className="card" style={{ width: '10rem',top: 10 }}>
                <img src={require('../imagenes/corazon.png')}className="card-img-top w-50 mx-auto" alt="Imagen1" />
                <div className="card-body">
                <h5 className="card-title"> Personal Interno </h5>
                <p className="card-text">
                Para acceder a nuestros servicios de atención psicológica, solo necesitas presentar tu credencial universitaria. Estos servicios están disponibles para estudiantes, docentes y otros miembros del equipo académico y administrativo. Puedes acceder a este servicio dentro de las instalaciones de la universidad.
                </p>
                </div>
            </div>
            <div className="card" style={{ width: '10rem',top: 10 }}>
                <img src={require('../imagenes/psicologia.png')}className="card-img-top w-50 mx-auto" alt="Imagen1" />
                <div className="card-body">
                <h5 className="card-title">Personal Externo</h5>
                <p className="card-text">
                Los requisitos para recibir nuestros servicios de atención psicológica solo necesitas presentar tu carnet de identidad Estos servicios están disponibles para padres de famila. Puedes acceder a ellos dentro de las instalaciones de la universidad en caso de emergencias
                </p>
                </div>
            </div>
            
        </div>

        
    
    );
}

export default Requisitos;
