import React, { useContext } from 'react'
import { capitalize } from '../../helpers';
import Context from '../Context';

const Species = () => {
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
                            <em>Classification: {result.classification}</em><br />
                            <em>Designation: {result.designation}</em>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Language: {result.language}</li>
                            <li className="list-group-item">Hair Colors: {result.hair_colors}</li>
                            <li className="list-group-item">Eye Colors: {result.eye_colors}</li>
                            <li className="list-group-item">Skin Colors: {result.skin_colors}</li>
                            <li className="list-group-item">Average Height: {result.average_height}</li>
                            <li className="list-group-item">Average LifeSpan: {result.average_lifespan}</li>
                        </ul>
                    </div>)
                    : '')}
        </div>
    )
}

export default Species