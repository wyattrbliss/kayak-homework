import kayakLogo from './images/Logo.svg';
import { useState, useEffect } from 'react';
import fetchJsonp from 'fetch-jsonp';
import InfiniteScroll from 'react-infinite-scroll-component';
import CardComponent from './components/CardComponent';
import { AirlineProps } from './properties';
import './App.css';

function App() {

	

	const alliances2 = {
		"OW": "Oneworld",
		"ST": "Sky Team",
		"SA": "Star Alliance"
	}
	// api url
	const url = "https://kayak.com/h/mobileapis/directory/airlines/homework";

	// state variables
	const [airlines, setAirlines] = useState<AirlineProps[]>([]);
	const [airlineIndex, setAirlineIndex] = useState(12);
	const [filterInfo, setFilterInfo] = useState({
		flag: false,
		code: ""
	});
	const [activeButton, setActivebutton] = useState("");

	// to fetch data on load
	useEffect(() => {
		getAirlinesOnLoad();
	  }, []);
	

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
			console.log("airlines", airlines);
		})
		.catch((error) => {
			console.log(error);
		})
	}

	// to change what is filtered
	function handleFilter(allianceCode: string) : void {
		if (filterInfo.flag) {
			if (allianceCode  != filterInfo.code) {
				setFilterInfo({flag: filterInfo.flag, code: allianceCode});
				return;
			}
		}
		setFilterInfo({flag: !filterInfo.flag, code: allianceCode});	
	}

	// to handle selected button click
	function handleActiveButton(code: string) : void {
		if (activeButton == code) {
			setActivebutton("");
		}  else {
			setActivebutton(code);
		}
	}

	// to handle a button click
	function handleClick(allianceCode: string) : void {
		handleActiveButton(allianceCode);
		handleFilter(allianceCode);
	}

	// button constants
	const alliances = new Map<string, string>();
	alliances.set("OW", "Oneworld");
	alliances.set("ST", "Sky Team");
	alliances.set("SA", "Star Alliance");	


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
					{Object.keys(alliances2).map((key) => (
						<div className="button-container" key={key}>
							<button className={`filter-button ${activeButton == key ? "active-button" : ""}`} 
								onClick={() => handleClick(key)}>
							</button>
							<div className="button-text">{alliances.get(key)}</div>
						</div>))}
					</div>
				</div>
				<InfiniteScroll
          		dataLength={airlineIndex}
          		next={() => {
					  setAirlineIndex(airlineIndex + 12);
					}}
          		hasMore={true}
          		loader={<span></span>}
				endMessage={<span></span>}
        		>
					{filterInfo.flag
					?
					<div className="container grid-container">
						{airlines.filter((airline) => airline.alliance == filterInfo.code).slice(0, airlineIndex).map((airline, index) => (
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
