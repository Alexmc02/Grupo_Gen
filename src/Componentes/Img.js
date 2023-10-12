import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Carousel() {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active ">
                    <img src={require('../imagenes/banner1.jpg')} className="d-block w-100 "  alt="banner1"  style={{ objectFit: 'cover', height: '700px' }}/>
                    <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src={require('../imagenes/R.jpg')} className="d-block w-100 " alt="banner2"  style={{ objectFit: 'cover', height: '700px' }}/>
                </div>
                <div className="carousel-item ">
                    <img src= {require('../imagenes/banner2.jpg')} className="d-block w-100 " alt="banner3" style={{ objectFit: 'cover', height: '700px' }}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
