import { CardProps } from "../constants/constants";
import { getAlliance, shortenURL } from "../utilities/utils";
import "../styles/Card.css";
	

function CardComponent({ airline, index }: CardProps) {
    return (
        <div className="airline-card" key={index}>
            <div className="card-container">
                <div>
                    <img className="card-logo" src={"https://kayak.com" + airline.logoURL} alt="airline logo"></img>
                </div>
                <div className="card-text">
                    <div className="airline-name">{airline.name}</div>
                    <div className="hidden-text">
                        {airline.alliance && <div>{getAlliance(airline.alliance)}</div>}
                        {airline.phone !== "none" && <div>{airline.phone}</div>}
                        <div className="airline-site">
                            {airline.site && airline.site !== "none" 
                            && <div>{shortenURL(airline.site)}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;