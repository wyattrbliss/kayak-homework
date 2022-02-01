// properties for airlines
export interface AirlineProps {
    "site": string | null,
    "code": string | null,
    "alliance": string | null,
    "phone": string | null,
    "name": string | null,
    "usName": string | null,
    "__clazz": string | null,
    "defaultName": string | null,
    "logoURL": string | undefined
  }

// properties for cards
export interface CardProps {
    airline: AirlineProps;
    index: number;
}