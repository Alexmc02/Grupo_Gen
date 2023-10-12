import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Informacion_Area() {
  return (
    <div className="card mb-3 mx-auto" style={{ maxWidth: '840px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={require('../imagenes/psicologia_3.jpg')} className=" img-fluid rounded " style={{ width: '800px', Height: '800px' }} alt="imagen2" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Gabinete Psicologico</h5>
            <p className="card-text text-justify">
            Nuestro compromiso es promover un ambiente de aprendizaje saludable y un bienestar integral para nuestros Estudiantes como para Docentes. Creemos que el apoyo psicológico es esencial para el éxito académico y personal de todos en nuestra comunidad universitaria.
            En nuestro instituto, cuidamos tu salud mental. No dudes en ponerte en contacto con nuestro equipo de psicólogos para obtener el apoyo que necesitas.   
            Tu bienestar es nuestra prioridad, y estamos aquí para apoyarte en tu camino hacia una vida universitaria exitosa y saludable.
            </p>
            <p className="card-text text-justify">
              <small className="text-body-secondary">"La salud mental es tan importante como la salud física; ambas son igualmente cruciales para una vida plena y significativa".</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informacion_Area;
