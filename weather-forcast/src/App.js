import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchWeather } from "./actions/fetchWeather";

import "./App.css";

function App() {
	const [city, setCity] = useState("");

	const weatherSelector = useSelector((state) => state.WeatherInfo);

	const getWeatherInfo = (e) => {
		e.preventDefault();
		if (city === "") {
			console.log("no city to search for");
		} else {
			console.log(city);
		}
	};

	return (
		<>
			<div className="App">
				<header>
					<h1> React Redux Weather App</h1>
					<p> Powered by React Hooks</p>
				</header>
			</div>
			<main>
				<form onSubmit={getWeatherInfo}>
					<div className="control">
						<input
							type="text"
							name="name"
							placeholder="Enter City to check weather"
							onChange={(e) => setCity(e.target.value)}
						/>
					</div>
					<input type="submit" value="Check Weather" />
				</form>
			</main>
		</>
	);
}

export default App;
