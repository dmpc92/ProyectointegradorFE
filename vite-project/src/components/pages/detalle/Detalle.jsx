import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./detalle.css";

const Detalle = () => {
  const { id } = useParams();
  const [auto, setAuto] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/autos/${id}`)
      .then(response => {
        setAuto(response.data);
      })
      .catch(error => {
        console.error("Error fetching auto:", error);
      });
  }, [id]);

  return (
    <>
      <section className="detalle-section">
        <Link className="detalle-volver-btn" to="/">Volver</Link>
        {auto ? (
          <div className="detalle-content">
            <div className="detalle-info-container">
              <h2 className="detalle-title">{auto.marca} {auto.nombre}</h2>
              <Link to={`/GaleriaDeImagenes/${auto.id}`} >
                <button className="detalle-btn">Ver Galería</button>
              </Link> 
              <Link to={`/Caracteristicas/${auto.id}`} >
                <button className="detalle-btn">Ver características</button>
              </Link>
              <button className="detalle-btn">Fecha de Retiro</button>
              <button className="detalle-btn">Fecha de Devolucion</button>
              <Link to={`/PoliticasDeUso/${auto.id}`}> <h4 className="detalle-politicas">Políticas de Uso</h4></Link>
            </div>
            <div className="detalle-img-container">
              <img className="detalle-img" src={auto.imgUrl} alt={auto.nombre} />
            </div>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </section>
    </>
  );
};

export default Detalle;
