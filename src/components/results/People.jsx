import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import Context from '../Context';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { capitalize } from '../../helpers';

const People = () => {

    const { result, setResult, loading, setLoading, resource } = useContext(Context);

    const [homeworld, setHomeworld] = useState("");

    //React Routing, search people with the id in the url 
    const { id } = useParams();

    useEffect(() => {
        console.log("use effect");

        // setHomeworld("");
        // if (id) {
        //     setLoading(true);
        //     axios.get(`https://swapi.dev/api/people/${id}/`)
        //         .then(response => {
        //             setResult(response.data);
        //         }).catch(err => setResult('error'));
        // }

        //Get name of homeworld
        if (result.homeworld) {
            setLoading(true);
            //Reset homeworld
            setHomeworld("");
            axios.get(result.homeworld).then(response => { setHomeworld(response.data.name); setLoading(false) });
        }
    }, [result.homeworld]);


    return (
        <div className='mt-4 '>
            <h1 className='ms-3'>{capitalize(resource)}</h1>
            <hr />

            {loading === true 
                ? (<>Loading...</>)
                : ((Object.keys(result).length > 0 && homeworld !== "") //Si no hay loading
                    ? (<div className='card mt-4 '>
                        <div className='card-header text-secondary'>
                            <h3>{result.name}</h3>
                            <em>Gender: {result.gender}</em>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Height: {result.height}</li>
                            <li className="list-group-item">Hair Color: {result.hair_color}</li>
                            <li className="list-group-item">Birth Year: {result.birth_year}</li>
                            <li className="list-group-item">Mass: {result.mass}</li>
                            <li className="list-group-item">Homeworld: {homeworld}</li>
                        </ul>
                    </div>)
                    : '')}

        </div>
    )
}

export default People;