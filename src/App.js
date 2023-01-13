import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import Context from './components/Context';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import People from './components/results/People';
import axios from 'axios'

function App() {
	const [result, setResult] = useState({});
	const [resource, setResource] = useState("people");
	const [loading, setLoading] = useState(false);

	return (
		<div className="m-5">
			<Context.Provider value={{ result, setResult, resource, setResource, loading, setLoading }}>
				<BrowserRouter>
					<Routes>
						{/* Render form and result */}
						<Route path='/' element={<><Form /><Result /></>}></Route>
						{/* Render only people result */}
						{/* <Route path="/:id" loader={({ params }) => {  }} element={< People />}> */}
						<Route path="/:id" element={< Result />}>
						</Route>
					</Routes>
				</BrowserRouter>
			</Context.Provider>

		</div >
	);
}

export default App;
