import seriesdata from "../api/Seriesdata.json";
import { SeriesCard } from "./SeriesCard";

const Netflixseries = () => {
    return (
        <ul>
            {seriesdata.map((curr) => (
                <SeriesCard key={curr.id} curr={curr} />
            ))}
        </ul>
    );
};

export default Netflixseries;