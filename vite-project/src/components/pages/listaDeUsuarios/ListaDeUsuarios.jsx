import React, { useState } from 'react';
import AgregarUsuario from '../../common/agregarUsuario/AgregarUsuario'; // Asegúrate de importar el componente AgregarUsuario correctamente
import TablaUsuarios from '../../common/tablaUsuarios/TablaUsuarios';
import { Link } from 'react-router-dom';
import Button from "../../common/button/Button";

const ListaDeUsuarios = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className='bg-[#91c0f34d] min-h-screen'>
        <div className='mx-4 sm:mx-8 pt-8 mb-16 sm:mb-40'>
          <Link to="/PanelAdministrador">
            <Button>Volver</Button>
          </Link>
          <h1 className="text-3xl font-bold text-center my-8 ">Lista de usuarios</h1>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 sm:mb-8 w-full sm:w-auto' onClick={handleOpen}>Agregar Usuario</button>
          <AgregarUsuario
            open={open}
            handleClose={handleClose}
          />
          <TablaUsuarios />
        </div>
      </div>
    </>
  );
};

export default ListaDeUsuarios;
