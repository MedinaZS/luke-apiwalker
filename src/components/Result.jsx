import React, { useContext, useEffect } from 'react'
import Context from './Context';
import People from './results/People';
import Planets from './results/Planets';
import Films from './results/Films';
import Species from './results/Species';
import Starships from './results/Starships';
import Vehicles from './results/Vehicles';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Error from './results/Error';

const Result = () => {

	const { resource, result, setLoading, setResult } = useContext(Context);

	const { id } = useParams();

	useEffect(() => {
		console.log("use effect result");
		if (id) {
			setLoading(true);
			axios.get(`https://swapi.dev/api/people/${id}/`)
				.then(response => {
					setResult(response.data);
				}).catch(err => { setResult('error');  setLoading(false);});
		}
	}, []);



	//Si hay error
	if (result === 'error') {
		return (<Error />)
	} else {
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



}

export default Result