import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Form = () => {

    const [listResources, setListResources] = useState("");
    const [resource, setResource] = useState("");

    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(response => {
                setListResources(Object.keys(response.data));
            });

    }, []);

    const handleSearchFor = (e) => {
        setResource(e.target.innerText);
    }

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    return (
        <div className='d-flex'>
            {/* Select menu */}
            <div className='row align-items-center me-5'>
                <div className='col-auto'>
                    <label htmlFor="">Search for:</label>
                </div>

                <div className='col-auto'>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                            <i className="fa-regular fa-circle-user me-2"></i>
                            <span className='me-5'>{resource ? resource : 'People'}</span>
                        </button>
                        <ul class="dropdown-menu">
                            {listResources && listResources.map((item,index) => (
                                <li className='dropdown-item' onClick={handleSearchFor} key={index}>
                                    <i className="fa-regular fa-circle-user me-2"></i>

                                    {capitalize(item)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Id search */}
            <div className='row align-items-center'>
                <div className='col-auto'>
                    <label>Id</label>
                </div>
                <div className='col-auto'>
                    <input style={{ width: '100px' }} type="text" />
                </div>
                <div className='col-auto'>
                    <button className='btn btn-secondary px-3'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Form