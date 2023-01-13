import React, { useContext } from 'react'
import Context from './Context';
import People from './results/People';
import Planets from './results/Planets';
import Films from './results/Films';
import Species from './results/Species';
import Starships from './results/Starships';
import Vehicles from './results/Vehicles';

const Result = () => {

	const { resource, result } = useContext(Context);

	//Si hay error
	if (result === 'error') {
		return (
			<div className='card mt-4' style={{ width: 'max-content' }}>
				<div className='card-header'>
					<h2 className='text-danger'>Estos no son los droides que estas buscando!</h2>
				</div>
				<div className='text-center p-4'>
					<img src="obi-wan.gif" alt="obi-wan kenobi" />
				</div>
			</div>
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