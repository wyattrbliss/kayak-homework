// enum for codes
export enum Alliance {
	OW = "OW",
	ST = "ST",
	SA = "SA"
}

// properties for airlines
export interface AirlineProps {
	site: string;
	code: string;
	alliance: Alliance;
	phone: string;
	name: string;
	usName: string;
	__clazz: string;
	defaultName: string;
	logoURL: string;
}

// properties for filters
export interface FilterProps {
	filterCodes: string[];
	setFilterCodes: (codes: string[]) => void;
	setAirlineIndex: (index: number) => void;
}

// properties for cards
export interface CardProps {
	airline: AirlineProps;
}

// api url
export const URL = "https://kayak.com/h/mobileapis/directory/airlines/homework";

// constant for incrementing scroll
export const INCREMENT = 12;

