import React, { useEffect, useState } from 'react';

const ManageItems = () => {
    const handleDelete = id =>{
        const proceed =window.confirm('Are you sure?')
        if(proceed){
          const url =`https://sleepy-beach-04229.herokuapp.com/inventory/${id}`
          fetch(url, {
              method: 'delete'
          })
          .then (res => res.json)
          .then(data => {
              console.log(data)
              const remaining = inventories.filter(inventory => inventory._id !== id);
              setInventories(remaining)

          })
         
        }
    }
    
    const [inventories, setInventories] = useState([])

    useEffect(() => {

        fetch('https://sleepy-beach-04229.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data.slice(0, 6)))
            

    }, [])


    return (
        <div className='container'>
        <h1 className='text-center text-bold mt-5'> All Items </h1>
        <div className='row'>
        {
            inventories.map(inventory => <div
               key={inventory._id} >
              
              <div className=' gx-5 mt-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={inventory.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name:{inventory.name}</h5>
                    <p className="card-text">Supplier Name:{inventory.supplier}</p>
                    <p className="card-text">Description:{inventory.description}</p>
                    <p className="card-text">quantity:{inventory.quantity}</p>
                    <p className="card-text">Price:{inventory.price}</p>
                    <button onClick={()=>handleDelete(inventory._id)} on className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>

            </div>)
        }
        </div>
    </div>
    );
};

export default ManageItems;