import React from 'react'
import Button from '@mui/material/Button';
import AgregarProducto from '../../common/agregarProducto/AgregarProducto';
import Navbar from '../../common/navbar/Navbar';
const Administrador = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Navbar/>
      <Button onClick={handleOpen}>Agregar Producto</Button>
      <AgregarProducto open ={open} handleClose ={handleClose} />
    </div>
  )
}

export default Administrador
