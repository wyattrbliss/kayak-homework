// properties for airlines
export interface AirlineProps {
    "site": string,
    "code": string,
    "alliance": string,
    "phone": string,
    "name": string,
    "usName": string,
    "__clazz": string,
    "defaultName": string,
    "logoURL": string
  }

// properties for filters
export interface FilterProps {
    flag: boolean;
    codes: string[]
}

// properties for cards
export interface CardProps {
    airline: AirlineProps;
    index: number;
}