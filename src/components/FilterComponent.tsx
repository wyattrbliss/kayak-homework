import { Alliance, INCREMENT } from "../constants/constants";
import { getAlliance } from "../utilities/utils";
import { FilterProps } from "../constants/constants";
import "../styles/Filter.css";



function FilterComponent({ filterCodes, setFilterCodes, setAirlineIndex }: FilterProps) {

    // to handle button click
    function handleClick(code: string) {
        let codes = [...filterCodes];
        let index = codes.indexOf(code);

        if (index === -1) {
            codes.push(code);
            setFilterCodes(codes);
        }  else {
            codes.splice(index, 1);
            setFilterCodes(codes);
        }
        setAirlineIndex(INCREMENT);
    }


    return (
        <div className=" container filter-container">
            <div className="filter-title-container">
                Filter by Alliances
            </div>
            <div className="filter-buttons">
                {Object.keys(Alliance).map((key) => (
                    <div className="button-container" key={key}>
                        <input type="checkbox" className="filter-button" onClick={() => handleClick(key)}/>
                        <div className="button-text">{getAlliance(key)}</div>
                    </div>))}
            </div>
        </div>
    );
}

export default FilterComponent;