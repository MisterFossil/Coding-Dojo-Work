import React, { useState } from 'react';
import Results from './Results';

const Form = (props) => {
    const [formParam, setFormParam ] = useState({});

    const onSubmitHandler = event => {
        event.preventDefault();
        setFormParam({
            category: event.target.category.value,
            id: event.target.id.value,
        })
        console.log(formParam);
    }
    
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-entry">
                            <label htmlFor="category">Search For:</label>
                            <select name="category" id="category" className="form-control">
                                <option value="people">People</option>
                                <option value="planets">Planets</option>
                                <option value="films">Films</option>
                                <option value="species">Species</option>
                                <option value="vehicles">Vehicles</option>
                                <option value="starships">Starships</option>
                            </select>
                        </div>
                        <div className="form-entry">
                            <label htmlFor="id">Id:</label>
                            <input type="number" name="id" className='form-control' />
                        </div>
                        <input className="btn btn-outline-warning mt-4" type="submit" value="Load Data"/>
                    </form>
                </div>
            </div>
            <div className="row">
                <Results formParams={formParam}/>
            </div>
        </>
    );
}

export default Form;