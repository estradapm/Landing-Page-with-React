import React from "react";

export const Carrusel = () => {
    return (
        <div style={{ paddingBottom: '60px' }}>
                <div id="carouselExample" className="carousel slide" style={{ width: '100%', margin: 'auto' }}>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://www.dqsconsulting.com/wp-content/uploads/2021/10/5-Aplicaciones-Empresariales-que-beneficiaran-tu-negocio.jpg" className="d-block w-100" alt="Innovative Business Applications" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.dqsconsulting.com/wp-content/uploads/2021/09/aplicaciones-empresariales-importantes-empresa.jpg" className="d-block w-100" alt="Important Business Applications" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.officemadrid.es//wp-content/uploads/tendencias-empresariales-2022.png" className="d-block w-100" alt="Business Trends 2022" />
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
            </div>
    )
}