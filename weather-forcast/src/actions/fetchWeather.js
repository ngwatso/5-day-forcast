export function fetchWeather(city) {
	return function (dispatch) {
		fetch(
			`https://cors-anywhere.herokuapp.com/https://api.apixu.com/v1/current.json?key=3a1a9b0e3b457acdd90bb15b9b82bb8b&q=${city}`
		)
			.then((res) => {
				return res.json();
			})
			.then((JSONres) => {
				// ?? Dispatch Action
				dispatch({ type: "FETCH_WEATHER", payload: JSONres });
			})
			.catch((err) => console.error("ERROR FETHCING DATA", err));
	};
}
