import React, { useContext } from 'react'
import { capitalize } from '../../helpers';
import Context from '../Context';

const Vehicles = () => {
    const { result, loading, resource } = useContext(Context);


    return (
        <div className='mt-4 '>
            <h1 className='ms-3'>{capitalize(resource)}</h1>
            <hr />
            {loading === true
                ? (<>Loading...</>)
                : (Object.keys(result).length > 0
                    ? (<div className='card mt-4 '>
                        <div className='card-header text-secondary'>
                            <h3>{result.name}</h3>
                            <em>Model: {result.model}</em><br />
                            <em>Class: {result.vehicle_class}</em>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cargo Capacity: {result.cargo_capacity}</li>
                            <li className="list-group-item">Consumables: {result.consumables}</li>
                            <li className="list-group-item">Manufacturer: {result.manufacturer}</li>
                            <li className="list-group-item">Max Atmosphering Speed: {result.max_atmosphering_speed}</li>
                            <li className="list-group-item">Passengers: {result.passengers}</li>
                        </ul>
                    </div>)
                    : '')}
        </div>
    )
}

export default Vehicles