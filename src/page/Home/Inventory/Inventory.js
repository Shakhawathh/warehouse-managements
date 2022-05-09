import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {

    const { _id, name,supplier, img, description, price ,quantity } = inventory
    const navigate = useNavigate();
    const moveToInventoriDetail = id => {
       navigate(`/Inventory/${id}`)
    }
    return (
        <div className=' gx-5 mt-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name:{name}</h5>
                    <p className="card-text">Supplier Name:{supplier}</p>
                    <p className="card-text">Description:{description}</p>
                    <p className="card-text">quantity:{quantity}</p>
                    <p className="card-text">Price:{price}</p>
                    <button onClick={()=>moveToInventoriDetail(_id)} className="btn btn-dark">update</button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;