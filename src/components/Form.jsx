import React, { useContext, useState } from 'react'
import Context from './Context';
import axios from 'axios';
import { createUrl } from '../helpers';

const Form = () => {

    const { resource, setResource, setResult, setLoading } = useContext(Context);
    const [id, setId] = useState("");

    const searchResource = (evento) => {
        evento.preventDefault();
        //Obtain data
        getData();
        //Clear input
        setId("");
        document.getElementById("input-id").focus();
        //Set loading message to true
        setLoading(true);
    }

    const getData = () => {
        //Build url
        const url = createUrl(resource,id);

        axios.get(url)
            .then(response => {
                setResult(response.data);
                setLoading(false);
            }).catch(err => { setResult('error');  setLoading(false);});

        
    }

    // const createUrl = () => {
    //     return `https://swapi.dev/api/${resource.toLowerCase()}/${id}/`;
    // }

    return (
        <form onSubmit={searchResource} className='d-flex align-items-center'>

            {/* Menu search for */}
            <div className="input-group mb-3 me-4">
                <span className="input-group-text" id="basic-addon1">Search for:</span>
                <select className="form-select" onChange={(e) => { setResource(e.target.value); setResult(""); }} value={resource}>
                    <option value='people'>People</option>
                    <option value='films'>Films</option>
                    <option value='starships'>Starships</option>
                    <option value='vehicles'>Vehicles</option>
                    <option value='species'>Species</option>
                    <option value='planets'>Planets</option>
                </select>
            </div>

            {/* Search for id */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">ID:</span>
                <input id='input-id' className='form-control' style={{ width: '100px' }} type="number" value={id} onChange={(e) => setId(e.target.value)} min='1' required />
                <button className="btn btn-secondary" type="submit" id="button-addon2"><i className='fa fa-search'></i> Search</button>
            </div>
        </form>
    )
}

export default Form