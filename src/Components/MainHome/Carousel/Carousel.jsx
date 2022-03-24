import React from "react";
import './Carousel.css';

export default (props) => {
  return (
        <section>
          <div id="carouselExampleControls" className="carousel slide mb-3" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={props.fotoalemanha} alt="Foto do Rio de Janeiro"/>
                <div className="carousel-caption d-none d-md-block">
                    

                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={props.fotobelize} alt="Foto de Salvador"/>
                <div className="carousel-caption d-none d-md-block">
                    
                </div>

              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={props.fotoitalia} alt="Foto de São Paulo"/>
                <div className="carousel-caption d-none d-md-block">
                </div>

              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Anterior</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Próximo</span>
              </a>
            </div>
          </div>
        </section>
  );
}