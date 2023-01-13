import React, { useContext } from 'react'
import { capitalize } from '../../helpers';
import Context from '../Context';

const Error = () => {

    const { resource,loading } = useContext(Context);

    return (
        <div className='mt-4'>
            <h1 className='ms-3'>{capitalize(resource)}</h1>
            <hr />
            {loading === true
                ? (<>Loading...</>)
                : (<div className='card mt-4' style={{ width: 'max-content' }}>
                    <div className='card-header'>
                        <h2 className='text-danger'>Estos no son los droides que estas buscando!</h2>
                    </div>
                    <div className='text-center p-4'>
                        <img src="obi-wan.gif" alt="obi-wan kenobi" />
                    </div>
                </div>)}
        </div>
    )
}

export default Error