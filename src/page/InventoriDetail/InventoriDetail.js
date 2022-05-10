import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoriDetail = () => {
    const {inventoryId}= useParams();
    const [inventory, setInventories]= useState({})

    useEffect( ()=> {
         const url= `https://sleepy-beach-04229.herokuapp.com/inventory/${inventoryId}`

         fetch(url)
         .then(res => res.json())
         .then(data => setInventories(data))
    },[]  )


    return (
        <div className='container text-center'>
            <h2>Information</h2>
            <div className="card" style={{ width: "18rem" }}>
                <img src={inventory.img} className="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text">Id:{inventory._id}</p>
                    <h5 className="card-title">Name:{inventory.name}</h5>
                    <p className="card-text">Supplier Name{inventory.supplier}</p>
                    <p className="card-text">Description:{inventory.description}</p>
                    <p className="card-text">quantity:{inventory.quantity}</p>
                    <p className="card-text">Price:{inventory.price}</p>
                    <button  className="btn btn-dark">update</button>
                </div>
            </div>


           <div className='text-center'>
           <Link to="/Checkout">
            <button className='btn btn-dark'>Checkout</button></Link>
           </div>
        </div>
    );
};

export default InventoriDetail;