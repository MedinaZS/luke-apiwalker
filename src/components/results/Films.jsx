import React, { useContext } from 'react'
import { capitalize } from '../../helpers';
import Context from '../Context';

const Films = () => {
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
                            <h3>{result.title}</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Created: {result.created}</li>
                            <li className="list-group-item">Director: {result.director}</li>
                            <li className="list-group-item">Producer: {result.producer}</li>
                            <li className="list-group-item">Opening: {result.opening_crawl}</li>
                        </ul>
                    </div>)
                    : '')}
        </div>
    )
}

export default Films