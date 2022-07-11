import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

function ViewProducts (props) {
    const [Products, SetProducts] = useState([0]);

    useEffect(()=>{
        getAllProducts();
    }, []);


    const getAllProducts = async() => {
        const respuesta = await axios.get(`${endpoint}/products`);
        SetProducts(respuesta.data);
        console.log(respuesta.data);
    };
    const deleteProduct = async(id) => {
        await axios.delete(`${endpoint}/product/${id}`);
        getAllProducts();
    };


    return (
        <div>
            <div className='d-grid gap-2'> 
                <Link to='/create' className='btn btn-success btn-lg mt-2 mb-2 text-white'> Create </Link>
            </div>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {Products.map( (producto) => {
                     return <tr key={producto.id}>
                                <td> {producto.descripcion} </td>
                                <td> {producto.precio} </td>
                                <td> {producto.stock} </td>
                                <td> 
                                    <Link to={`/edit/${producto.id}`} className='btn me-2 btn-warning'>Editar</Link>
                                    <button onClick={()=>deleteProduct(producto.id)} className='btn btn-danger'>Eliminar</button>
                                </td>
                       </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ViewProducts;