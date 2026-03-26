import seriesdata from "../api/Seriesdata.json";
import { SeriesCard } from "./SeriesCard";

const Netflixseries = () => {
    return (
        <ul className="grid grid-three--cols">
            {seriesdata.map((curr) => (
                <SeriesCard key={curr.id} curr={curr} /> 
                // here we are passing component with data is called propes
            ))}
        </ul>
    );
};

export default Netflixseries;