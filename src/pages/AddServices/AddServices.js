import React from 'react';
import { useForm } from 'react-hook-form';
import './AddServices.css'

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/tours', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Data Successfully Added');
                reset();
            }
        })
    };
    return (
        <div className="container py-5">
                <h2 className="py-3 text-center" style={{color: '#ff7f47'}}>Add Services</h2>
            <div className="add-services">
                    <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                        <input Placeholder="Please Type Title" {...register("title")} required/>
                        <input Placeholder="Please Type Price" {...register("price")} required/>
                        <input Placeholder="Please Type Ratting" {...register("ratting")} required/>
                        <input Placeholder="Please Type Day" {...register("day")} required/>
                        <input Placeholder="Please Type Person" {...register("person")} required/>
                        <input Placeholder="Please Type Location" {...register("location")} required/>
                        <input Placeholder="Please Type Image Link" {...register("img")} required/>
                        <input type="submit" className="btn w-75 text-white"  style={{backgroundColor: '#ff7f47'}}/>
                    </form>
                </div>
        </div>
    );
};

export default AddServices;