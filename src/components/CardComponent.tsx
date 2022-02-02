import { CardProps } from "../constants";


// button constants
const alliances = new Map<string, string>();
alliances.set("OW", "Oneworld");
alliances.set("ST", "Sky Team");
alliances.set("SA", "Star Alliance");	

function CardComponent(props: CardProps) {
    return (
        <div className="airline-card" key={props.index}>
            <div>
                <img className="card-logo" src={"https://kayak.com" + props.airline.logoURL}></img>
            </div>
            <div className="card-text">
                <div className="airline-name">{props.airline.name}</div>
                <div className="hidden-text">
                    {props.airline.alliance && <div>{alliances.get(props.airline.alliance)}</div>}
                    {props.airline.phone != "none" && <div>{props.airline.phone}</div>}
                    <div className="airline-site">
                        {props.airline.site && props.airline.site != "none" 
                        && <div>{props.airline.site.replace("https://", "").replace("http://", "").split("/")[0]}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;