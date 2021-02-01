// import React, { Component } from "react";
// import axios from "axios";

// class WeatherData extends Component {
// 	constructor() {
// 		super();
// 		this.state = { weatherInfo: [] };
// 	}

// 	componentDidMount() {
// 		axios.get(
// 			"https://api.openweathermap.org/data/2.5/weather?q={Allen Park},{MI}&appid={d480b0ae3fb7acb056e1e1fdca123130}"
// 		)
// 			.then((res) => {
// 				console.log(
// 					"THIS IS WEATHER DATA FROM API =====> ",
// 					res.data
// 				);
// 				this.setState({ weatherInfo: [res.data] });
// 			})
// 			.catch((err) => console.error("ERROR PULLING DATA!!", err));
// 	}

// 	render() {
// 		return <div></div>;
// 	}

// 	// var unirest = require("unirest");

// 	// var req = unirest(
// 	// 	"GET",
// 	// 	"https://community-open-weather-map.p.rapidapi.com/forecast"
// 	// );

// 	// req.query({
// 	// 	q: "allen park, us",
// 	// 	units: '"imperial"',
// 	// });

// 	// req.headers({
// 	// 	"x-rapidapi-key":
// 	// 		"763b3eddafmshfc49de740cbb478p1a6f11jsnd8935c7fb95a",
// 	// 	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
// 	// 	useQueryString: true,
// 	// });

// 	// req.end(function (res) {
// 	// 	if (res.error) throw new Error(res.error);

// 	// 	console.log(res.body);
// 	// });
// }

// export default WeatherData;
