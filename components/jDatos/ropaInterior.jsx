import React, { useContext, useEffect, useState } from 'react';
import { ArticulosContext } from '../context/providerArticulos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const RopaInterior = () => {

  const { setItems, items } = useContext(ArticulosContext);
  const [datos, setDatos] = useState([]);
  const [articulosAgregados, setArticulosAgregados] = useState({});
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('jsonListArticulos.json');
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        console.error('Error al cargar el JSON:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    // Calcula la cantidad de cada artículo agregado
    const agregados = items.reduce((acc, curr) => {
      acc[curr.alt] = (acc[curr.alt] || 0) + 1;
      return acc;
    }, {});
    setArticulosAgregados(agregados);
  }, [items]);

  const notify = (item, action) =>
    toast.success(`Se ${action} correctamente ${item}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    const handleAddItem = (item) => {
      const cantidadAgregada = items.filter((i) => i.alt === item.alt).length;
      if (cantidadAgregada < item.stock) {
        notify(item.alt, "agregó");
        const nuevosArticulos = [...items];
        nuevosArticulos.push(item);
        setItems(nuevosArticulos);
      } else {
        // Notificar al usuario que no se pueden agregar más artículos
        toast.error(`No se pueden agregar más "${item.alt}", se ha alcanzado el límite de stock`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };
    


    const handleRemoveItem = (item) => {
      const itemIndex = items.findIndex((i) => i.id === item.id);
      if (itemIndex !== -1) {
        notify(item.alt, "eliminó");
        const nuevosArticulos = [...items];
        nuevosArticulos.splice(itemIndex, 1);
        setItems(nuevosArticulos);
      }
    };


    const filteredDatos = datos.filter((item) => {
      return item.alt.toLowerCase().includes(searchTerm.toLowerCase()) || item.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    });


  return (
    <>
      <div className='d-flex justify-content-center py-3'>
        <h1>Ropa interior</h1>
      </div>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          placeholder="Buscar por alt o descripción..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className='imagens d-flex justify-content-center'>
        {filteredDatos.map(imagen => (
          <div className='catalogo' key={imagen.id}>
            <div className='decripcionCatalogo'>
              <p><b>{imagen.alt}</b></p>
              <p className='stock'>Stock: {imagen.stock}</p>
              <p>{imagen.descripcion}</p>
            </div>
            <img src={imagen.url} alt={imagen.alt} />
            <div className='d-flex justify-content-around'>
              <p><u>Precio: {imagen.precio}</u></p>
              <div className='d-flex justify-content-around masomenos'>
                <p className='mascarrito' onClick={() => handleAddItem(imagen)}><i className="fa-solid fa-plus"></i></p>
                 <p>{articulosAgregados[imagen.alt] || 0}</p> 
                <p className='mascarrito' onClick={() => handleRemoveItem(imagen)}><i className="fa-solid fa-minus"></i></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  )
}