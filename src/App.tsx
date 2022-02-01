import kayakLogo from './images/Logo.svg';
import check from './images/iconmonstr-check-mark-12.svg';
import { useState, useEffect } from 'react';
import fetchJsonp from 'fetch-jsonp';
import InfiniteScroll from 'react-infinite-scroll-component';
import CardComponent from './components/CardComponent';
import { AirlineProps, FilterProps } from './properties';
import './styles/App.css';
import './styles/Filter.css';
import './styles/Card.css';


enum Alliance {
	OW = "OW",
  	ST = "ST",
  	SA = "SA"
}

function App() {

	
	// api url
	const url = "https://kayak.com/h/mobileapis/directory/airlines/homework";

	// button constants
	const alliances = new Map<string, string>();
	alliances.set("OW", "Oneworld");
	alliances.set("ST", "Sky Team");
	alliances.set("SA", "Star Alliance");

	// state variables
	const [airlines, setAirlines] = useState<AirlineProps[]>([]);
	const [airlineIndex, setAirlineIndex] = useState(12);
	const [filterCodes, setFilterCodes] = useState<string[]>([]);

	// to get data from the jsonp api
	async function getAirlinesOnLoad() {
		fetchJsonp(url, {
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

	// to handle button click
	function handleClick(code: string) {
		let codes = [...filterCodes];
		let index = codes.indexOf(code);
		console.log("codes", codes)
		console.log("index", index)

		if (index == -1) {
			codes.push(code);
			setFilterCodes(codes);
		}  else {
			codes.splice(index, 1);
			setFilterCodes(codes)
		}
	}


	return (
  		<div className="App">
			<div className="header">
				<img className="logo" src={kayakLogo}></img>
			</div>

			<div className="content-container">
				<div className="container title-container">
					Airlines
				</div>

				<div className=" container filter-container">
					<div className="filter-title-container">
						Filter by Alliances
					</div>
					<div className="filter-buttons">
						{Object.keys(Alliance).map((key) => (
							<div className="button-container" key={key}>
								<button className="filter-button" onClick={() => handleClick(key)}>
									<img className={`check-image ${filterCodes.includes(key) ? "active-button" : ""}`} src={check}></img>
								</button>
								<div className="button-text">{alliances.get(key)}</div>
							</div>))}
					</div>
        		</div>
	
				<InfiniteScroll dataLength={airlineIndex}
								next={() => {setAirlineIndex(airlineIndex + 12);}}
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
