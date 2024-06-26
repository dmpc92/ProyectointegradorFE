import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaDoorOpen, FaSuitcase, FaUser } from "react-icons/fa";
import axios from "axios";
import Button from "../../common/button/Button";
import './caracteristicas.css';
const Caracteristicas = () => {
  const { id } = useParams();
  const [auto, setAuto] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/autos/buscar/${id}`)
      .then((response) => {
        setAuto(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  console.log(auto);

  return (
    <>
      <section className=" bg-[#f5f5f5] min-h-screen">
        <div className="mx-[4vw] pt-8 ">
          <Link to={`/detalle/${auto?.id}`}>
            <Button>Volver</Button>
          </Link>
        </div>
        {auto ? (
          <div className="flex gap-20 justify-between items-center mx-[4vw] ">
            <div className=" basis-1/2 flex flex-col gap-4 p-4 shadow-lg border-2 border-[#0C4D9C] rounded-xl bg-slate-200">
              <h2 className="text-2xl font-medium text-gray-900 ">
                {auto?.marca} {auto?.modelo}
              </h2>
              <p className="text-lg font-medium text-gray-900">
                {" "}
                Puertas : {auto?.puertas}
              </p>
              <p className="text-lg font-medium text-gray-900">
                {" "}
                Valijas : {auto?.valijas}
              </p>
              <p className="text-lg font-medium text-gray-900">
                {" "}
                Personas : {auto?.personas}
              </p>
              <p className="text-lg font-medium text-gray-900">
                Precio : $ {auto?.precio}
              </p>
            </div>
            <div className=" basis-1/2">
              <img className="" src={auto?.imgUrl} alt={auto?.nombre} />
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <div>
          <div className="flex items-center justify-center px-12 gap-6">
          <div className="max-w-md rounded-3xl p-px bg-gradient-to-b from-[#0C4D9C] to-[#0C4D9C]">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                <p className="text-gray-700 dark:text-gray-300">
                ¡La experiencia de alquilar un auto con esta empresa fue excelente! El vehículo estaba en perfectas condiciones y fue perfecto para nuestro viaje en familia. Definitivamente volveremos a alquilar con ellos en el futuro.
                </p>

                <div className="mt-8 flex gap-4 items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg"
                    alt=""
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                      Nicolas Lopez
                    </h3>
                    <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">
                      Fullstack Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-md rounded-3xl p-px bg-gradient-to-b from-[#0C4D9C] to-[#0C4D9C]">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                <p className="text-gray-700 dark:text-gray-300">
                ¡El mejor servicio de alquiler de autos que he utilizado! El auto era moderno, cómodo y tenía todas las características que necesitábamos para nuestro viaje. Definitivamente volveré a elegir esta empresa para futuros alquileres.
                </p>

                <div className="mt-8 flex gap-4 items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg"
                    alt=""
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                      Juan Bernardo Galardo
                    </h3>
                    <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">
                      Fullstack Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-md rounded-3xl p-px bg-gradient-to-b from-[#0C4D9C] to-[#0C4D9C]">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                <p className="text-gray-700 dark:text-gray-300">
                ¡Increíble experiencia de alquiler de autos! El auto estaba en excelentes condiciones, limpio y muy cómodo. El servicio al cliente también fue excelente. Definitivamente lo recomendaré a mis amigos y familiares.
                </p>

                <div className="mt-8 flex gap-4 items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg"
                    alt=""
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                      Martin
                    </h3>
                    <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">
                      Fullstack Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Caracteristicas;
