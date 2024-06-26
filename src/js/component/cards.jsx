import React from "react";

export const Cards = () => {
    return (
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
    )
}