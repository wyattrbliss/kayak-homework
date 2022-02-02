// enum for codes
export enum Alliance {
	OW = "OW",
	ST = "ST",
	SA = "SA"
}

// properties for airlines
export interface AirlineProps {
	site: string,
	code: string,
	alliance: Alliance,
	phone: string,
	name: string,
	usName: string,
	__clazz: string,
	defaultName: string,
	logoURL: string
}

// properties for filters
export interface FilterProps {
	codes: string[],
	ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

// properties for cards
export interface CardProps {
	airline: AirlineProps;
	index: number;
}

// api url
export const URL = "https://kayak.com/h/mobileapis/directory/airlines/homework";

