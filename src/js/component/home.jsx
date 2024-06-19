import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="d-flex justify-content-between bg-body-tertiary" style={{ backgroundColor: 'black', color: 'white' }}>
                <nav className="navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#" style={{ color: 'white' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                            Start Bootstrap
                        </a>
                    </div>
                </nav>

                <nav className="navbar navbar-expand-lg" style={{ color: 'white' }}>
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: 'white' }}>About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: 'white' }}>Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: 'white' }}>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Carrusel */}
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

            {/* Cards */}
            <div className="card-group" style={{ gap: '20px', margin: '20px' }}>
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" className="card-img-top" alt="Innovación Tecnológica" />
                    <div className="card-body">
                        <h5 className="card-title">Innovación Tecnológica</h5>
                        <p className="card-text">Descubre las últimas innovaciones tecnológicas que están cambiando el mundo.</p>
                        <p className="card-text"><small className="text-body-secondary">Actualizado hace 3 minutos</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" className="card-img-top" alt="Soluciones Empresariales" />
                    <div className="card-body">
                        <h5 className="card-title">Soluciones Empresariales</h5>
                        <p className="card-text">Implementa soluciones empresariales que mejoren la eficiencia y productividad.</p>
                        <p className="card-text"><small className="text-body-secondary">Actualizado hace 3 minutos</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8" className="card-img-top" alt="Futuro Digital" />
                    <div className="card-body">
                        <h5 className="card-title">Futuro Digital</h5>
                        <p className="card-text">Prepárate para el futuro digital con nuestras tecnologías innovadoras.</p>
                        <p className="card-text"><small className="text-body-secondary">Actualizado hace 3 minutos</small></p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white text-center text-lg-start mt-4">
                <div className="container p-4">
                   
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png" alt="Bootstrap Logo" width="60" />
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'black' }}>
                    © 2023 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </div>
    );
};

export default Home;