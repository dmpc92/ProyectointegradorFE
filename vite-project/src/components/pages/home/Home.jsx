import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Card from "../../common/card/Card";
import styles from "../home/home.module.css";
import Buscador from "../../common/buscador/Buscador";
import TipoDeAuto from "../../common/tipoDeAuto/TipoDeAuto";
import { ReservaContext } from "../../../context/ReservaContext";
import Recomendacion from "../../common/recomendacion/Recomendacion";

const Home = () => {
  const [autos, setAutos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [fecha, setFecha] = useState(null);
  const [autosFiltrados, setAutosFiltrados] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/autos")
      .then((res) => {
        setAutos(res.data);
      })
      .catch((err) => {
        console.error("Error al obtener los autos:", err);
      });
  }, []);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const handleBuscar = (nombre) => {
    const autosFiltrados = autos.filter((auto) => auto.marca.toLowerCase() === nombre.toLowerCase());
    setAutosFiltrados(autosFiltrados);
    
  };
console.log(autosFiltrados);
  const handleFormSubmit = (formData) => {
    setFecha(formData);
  };

  const autosToDisplay =
    searchResults.length > 0 ? searchResults.slice(0, 12) : autos.slice(0, 10);

  return (
    <>
      {searchResults.length > 0 ? (
        <>
          <div className={styles.busqueda}>
            <h1>Vehículos disponibles para las</h1>
            {fecha && (
              <>
                <p className={styles.subtitulo}>
                  Fecha de retiro: {fecha.fechaRetiro}
                </p>
                <p className={styles.subtitulo}>
                  Fecha de devolución: {fecha.fechaDevolucion}
                </p>
              </>
            )}
          </div>
          <div className="flex flex-wrap gap-4 justify-between items-center w-full">
            {autosToDisplay.map((auto) => (
              <Card key={auto.id} auto={auto} reserva={fecha} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="relative">
            <TipoDeAuto />
            <div className="absolute bottom-0 top-1/2 left-0 right-0">
              <Buscador
                onSearchResults={handleSearchResults}
                onFormSubmit={handleFormSubmit}
                onBuscar={handleBuscar}
              />
            </div>
          </div>
          <Recomendacion />
          <div className="bg-[#91c0f34d]">
            <div className="mx-[4vw] pt-8 ">
              <h2 className="text-4xl font-bold text-center ">
                NUESTROS AUTOS
              </h2>
              <div className="flex flex-wrap gap-4 justify-between items-center w-full">
                {autosFiltrados.length > 0 ? (
                  autosFiltrados.map((auto) => (
                    <Card key={auto.id} auto={auto} />
                  ))
                ) : (
                  autos.map((auto) => (
                    <Card key={auto.id} auto={auto} />
                  ))
                )}
              </div>
            </div>
          </div>
        </>
      )}

      <FontAwesomeIcon
        icon={faWhatsapp}
        size="3x"
        style={{
          color: "#25D366",
          position: "fixed",
          bottom: "70px",
          right: "20px",
          cursor: "pointer",
          zIndex: "9999",
        }}
        onClick={() => window.open("https://web.whatsapp.com", "_blank")}
      />
    </>
  );
};

export default Home;
