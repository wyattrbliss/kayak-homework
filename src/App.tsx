import kayakLogo from "./images/Logo.svg";
import { useState, useEffect } from "react";
import fetchJsonp from "fetch-jsonp";
import InfiniteScroll from "react-infinite-scroll-component";
import FilterComponent from "./components/FilterComponent";
import CardComponent from "./components/CardComponent";
import { AirlineProps, URL, INCREMENT } from "./constants/constants";
import "./styles/App.css";


function App() {


	// state variables
	const [airlines, setAirlines] = useState<AirlineProps[]>([]);
	const [airlineIndex, setAirlineIndex] = useState(INCREMENT);
	const [filterCodes, setFilterCodes] = useState<string[]>([]);

	// to get data from the jsonp api
	async function getAirlinesOnLoad() {
		fetchJsonp(URL, {
			jsonpCallback: "jsonp",
		})
		.then((response) => {
			if(response.ok) {
				return response.json();
			}
		})
		.then((data) => {
			setAirlines(data);
		})
		.catch((error) => {
			console.log(error);
		})
	}

	// to fetch data on load
	useEffect(() => {
		getAirlinesOnLoad();
	  }, []);


	return (
  		<div className="App">
			<div className="header">
				<img className="logo" src={kayakLogo} alt="KAYAK logo"></img>
			</div>

			<div className="content-container">
				<div className="container title-container">
					Airlines
				</div>

				<FilterComponent filterCodes={filterCodes}
								 setFilterCodes={setFilterCodes}
								 setAirlineIndex={setAirlineIndex}/>

				<InfiniteScroll dataLength={airlineIndex}
								next={() => {setAirlineIndex(airlineIndex + INCREMENT);}}
								hasMore={true}
								loader={<span></span>}
								endMessage={<span></span>}>
					{filterCodes.length > 0
					?
					<div className="container grid-container">
						{airlines.filter((airline) => filterCodes.includes(airline.alliance)).slice(0, airlineIndex).map((airline, index) => (
							<CardComponent
								airline={airline}
								index={index}
							/>))}
					</div>
					:
					<div className="container grid-container">
						{airlines.slice(0, airlineIndex).map((airline, index) => (
							<CardComponent
								airline={airline}
								index={index}
							/>))}
					</div>
					}
				</InfiniteScroll>
				
			</div>
		</div>
  	);
}

export default App;
