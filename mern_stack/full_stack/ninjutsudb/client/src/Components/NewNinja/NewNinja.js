import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const NewNinja = props => {
    const [ name, setName ] = useState("");
    const [ imageURL, setImgURL ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ errors, setErrors ] = useState({});

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/create", {
            name,
            imageURL,
            description
        })
        .then(res=>{
            if(res.data.errors) {
                setErrors(res.data.errors);
            } else {
                navigate('/');
            }})
        .catch(err=>console.log(err));
    }


    return (
        <div className="row mt-3 border border-dark rounded p-3">
            <div className="col-12">
                <h2 className="d-block text-center">New Ninja</h2>
            </div>
            <div className="col">
                <form onSubmit={onSubmitHandler} >
                    <div className="border-right d-inline-block w-50 p-2 pr-4">
                        <div className="form-entry">
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                className="form-control" 
                                placeholder="Your ninja's name..."
                                onChange={e => setName(e.target.value)}
                            />
                            <span className="text-danger">{errors.name ? errors.name.message : ""}</span>
                        </div>
                        <div className="form-entry">
                            <label htmlFor="ninImg">Image URL:</label>
                            <input 
                                type="text" 
                                name="ninImg" 
                                id="ninImg" 
                                className="form-control" 
                                placeholder="Your ninja's img url..."
                                onChange={e => setImgURL(e.target.value)}
                            />
                        </div>
                        <Link to="/">
                            <button className="btn btn-danger mt-2">Cancel</button>
                        </Link>
                    </div>
                    <div className="d-inline-block align-top p-2 ml-2">
                        <label htmlFor="description">Description:</label>
                        <textarea 
                            name="description" 
                            id="description" 
                            rows="3" 
                            cols="50" 
                            className="d-block form-control" 
                            placeholder="Tell us about your ninja..."
                            onChange={e => setDescription(e.target.value)}
                        ></textarea>
                        <span className="text-danger">{errors.description ? errors.description.message : ""}</span>
                        <input type="submit" value="Create Ninja" className="btn btn-success mt-2 float-right"/>
                    </div>

                </form>
            </div>


        </div>
    );
}

export default NewNinja;