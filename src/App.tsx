/** @format */
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Country from "./components/Country";
import Weather from "./components/Weather";

function App() {

	const navigate = useNavigate()

	return (
	<>
	<Nav navigate={navigate}/>
	<Routes>
		<Route path="/country/:country" element={<Country/>}/>
		<Route path='/weather/:capital' element={<Weather/>}/>
	</Routes>
	</>
	);
}

export default App;