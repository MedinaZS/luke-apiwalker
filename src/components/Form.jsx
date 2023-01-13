import React, { useContext, useState } from 'react'
import Context from './Context';
import axios from 'axios';

const Form = () => {

    const { resource, setResource, setResult, setLoading } = useContext(Context);

    const [id, setId] = useState("");

    const searchResource = (evento) => {
        evento.preventDefault();
        getData();
        setId("");
        
        setLoading(true);
        document.getElementById("input-id").focus();
    }

    const getData = () => {
        const url = createUrl();

         axios.get(url)
            .then(response => {
                setResult(response.data);
                setLoading(false);
            }).catch(err => setResult('error'));
            
    }

    const createUrl = () => {
        return `https://swapi.dev/api/${resource.toLowerCase()}/${id}/`;
    }

    return (
        <form onSubmit={searchResource} className='d-flex align-items-center'>

            {/* Menu search for */}
            <div className="input-group mb-3 me-4">
                <span className="input-group-text" id="basic-addon1">Search for:</span>
                {/* <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/> */}
                <select className="form-select" onChange={(e) => { setResource(e.target.value); setResult(""); }} value={resource}>
                    <option value='people'>People</option>
                    <option value='films'>Films</option>
                    <option value='starships'>Starships</option>
                    <option value='vehicles'>Vehicles</option>
                    <option value='species'>Species</option>
                    <option value='planets'>Planets</option>
                </select>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">ID:</span>
                <input id='input-id' className='form-control' style={{ width: '100px' }} type="number" value={id} onChange={(e) => setId(e.target.value)} min='0' required />
                <button className="btn btn-secondary" type="submit" id="button-addon2"><i className='fa fa-search'></i> Search</button>
            </div>


            {/* Search for dropdown menu */}
            {/* <MenuForm /> */}

            {/* Id search */}
            {/* <InputForm /> */}

        </form>
    )
}

export default Form