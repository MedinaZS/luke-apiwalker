import React, { useContext } from 'react'
import { capitalize } from '../../helpers';
import Context from '../Context';

const Planets = () => {

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
                            <em>Population: {result.population}</em>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Terrain: {result.terrain}</li>
                            <li className="list-group-item">Climate: {result.climate}</li>
                            <li className="list-group-item">Gravity: {result.gravity}</li>
                            <li className="list-group-item">Surface Water: {result.surface_water}</li>
                            <li className="list-group-item">Orbital Period: {result.orbital_period}</li>
                            <li className="list-group-item">Rotation Period: {result.rotation_period}</li>
                        </ul>
                    </div>)
                    : '')}

            

        </div>
    )
}

export default Planets