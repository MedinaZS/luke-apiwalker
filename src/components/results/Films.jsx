import React, { useContext } from 'react'
import Context from '../Context';

const Films = () => {
    const { result, loading } = useContext(Context);

    return (
        <div className='mt-4 '>
            <h1 className='ms-3'>Films</h1>
            <hr />
            {Object.keys(result).length > 0
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
                : (loading ? (<>Loading...</>) : '')}

        </div>
    )
}

export default Films