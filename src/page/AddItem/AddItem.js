import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      const url =`https://sleepy-beach-04229.herokuapp.com/inventory`

      fetch(url,{
          method:'post',
          headers:{
              'content-type': 'application/json'
          },
          body:JSON.stringify(data)
      })
     .then(res => res.json())
     .then(result => {
         console.log(result)
     })



    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Please add a Items</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='supplier' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='description' {...register("description")} />
                <input className='mb-2' placeholder='quantity' type="number" {...register("price")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='img' type="text" {...register("img")} />
                <input className='bg-dark text-white' type="submit" value="Add Items" />
            </form>
        </div>
    );
};

export default AddItem;