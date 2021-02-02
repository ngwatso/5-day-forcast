import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchWeather } from "./actions/fetchWeather";

import "./App.css";

function App() {
	const [city, setCity] = useState("");

	const weatherSelector = useSelector((state) => state.WeatherInfo);

	const dispatch = useDispatch();
	const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));

	useEffect(() => {
		getWeatherInfoAction("Allen Park");
	}, []);

	const getWeatherInfo = (e) => {
		e.preventDefault();
		if (city === "") {
			console.log("No city to search for");
		} else {
			getWeatherInfoAction(city);
		}
	};

	let details = "";

	if (weatherSelector.weatherinfo) {
		details = (
			<div className="details">
				<h4>Weather Details</h4>
				<p>
					{weatherSelector.weatherinfo.location.name}
					<span>
						{weatherSelector.weatherinfo.location.country}
					</span>
				</p>

				<p>{weatherSelector.weatherinfo.current.temp_f}</p>
				<img src={state.weatherData.current.condition.icon} />
			</div>
		);
	} else {
		details = <p>You need to type a city</p>;
	}

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
				{details}
			</main>
		</>
	);
}

export default App;
