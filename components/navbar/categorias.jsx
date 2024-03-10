import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CartWidget } from '../CartWidget';
import { ArticulosContext } from '../context/providerArticulos';

export const Categorias = ({ cuerpo, setCuerpo, cuerpoRender }) => {


  const { setItems, items } = useContext(ArticulosContext);
  
  const navigate = useNavigate();

  const handleRopaInteriorClick = () => {
    navigate('/RopaInterior');
  };

  const handleTrajesDeBañoClick = () => {
    navigate('/Trajebaño');
  };


  return (
    <div className='d-flex'>
      <CartWidget articulos={items} setArticulos={setItems} />
      <div className='categorias d-flex pt-4'>
  
        <button className='btn categoria' onClick={handleRopaInteriorClick}>Ropa interior</button>
   
        <button className='btn categoria' onClick={handleTrajesDeBañoClick}>Trajes de baño</button>
      </div>
    </div>
  );
}

