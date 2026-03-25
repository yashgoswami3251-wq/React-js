import seriesdata from "../api/Seriesdata.json";
{/* import Seriesdata.json file data */}

const Netflixseries = () => {
    return (
        <ul>
            {seriesdata.map((curr) => {
                return (
                    <li>
                        <div>
                            <img src={curr.img_url} alt="" height="50%" width="50%" />
                        </div>
                        <h2>Name:{curr.name}t</h2>
                        <h3>Rating:{curr.rating}</h3>
                        <p>Summary:{curr.description}</p>
                        <p>Genre:{curr.genre}</p>
                        <p>Cast:{curr.cast}</p>
                        <a href={curr.watch_url} target="_blank">
                            <button>Watch now</button>
                        </a>
                    </li>
                );
            })
            }
        </ul>
    );
};

export default Netflixseries;