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

// properties for cards
export interface CardProps {
    airline: AirlineProps;
    index: number;
}

// api url
export const url = "https://kayak.com/h/mobileapis/directory/airlines/homework";

// button constants
export const alliances = new Map<string, string>();
alliances.set("OW", "Oneworld");
alliances.set("ST", "Sky Team");
alliances.set("SA", "Star Alliance");