import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchWeather } from "./actions/fetchWeather";

import "./App.css";

function App() {
	const [city, setCity] = useState("");

	const weatherSelector = useSelector((state) => state.WeatherInfo);

	const dispatch = useDispatch();
	const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));

	const getWeatherInfo = (e) => {
		e.preventDefault();
		if (city === "") {
			console.log("No city to search for");
		} else {
			getWeatherInfoAction(city);
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
