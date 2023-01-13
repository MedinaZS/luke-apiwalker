import React, { useContext } from 'react'
import Context from './Context';
import People from './results/People';
import Planets from './results/Planets';
import Films from './results/Films';
import Species from './results/Species';
import Starships from './results/Starships';
import Vehicles from './results/Vehicles';
import {capitalize} from '../helpers'

const Result = () => {

	const { resource, result, loading } = useContext(Context);

	// console.log(loading);

	// function capitalize(string) {
	// 	return string.charAt(0).toUpperCase() + string.slice(1);
	// }

	//Si hay error
	if (result === 'error') {
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
					</div>)}</div>


		)
	}

	// console.log(Object.keys(result).length);

	//Si no hay error verificar que recurso se esta buscando y mostrarlo
	switch (resource) {
		case 'people':
			return <People />
		case 'planets':
			return <Planets />
		case 'films':
			return <Films />
		case 'species':
			return <Species />
		case 'vehicles':
			return <Vehicles />
		case 'starships':
			return <Starships />
		default:
			return '';
	}

}

export default Result