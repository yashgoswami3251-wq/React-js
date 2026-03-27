{/* export const SeriesCard = (props) => {
    return (
        <li key={props}>
            <div>
                <img src={props.curr.img_url} alt="" height="50%" width="50%" />
            </div>
            <h2>Name:{props.curr.name}</h2>
            <h3>Rating:{props.curr.rating}</h3>
            <p>Summary:{props.curr.description}</p>
            <p>Genre:{props.curr.genre}</p>
            <p>Cast:{props.curr.cast}</p>
            <a href={props.curr.watch_url} target="_blank">
                <button>Watch now</button>
            </a>
        </li>
    );
};
*/}

import "/src/components/Netflix.css"; 
{/* Destructuring in react.js ->*/}
export const SeriesCard = (props) => {

    const {img_url,name,rating,description,genre,cast,watch_url,Name} = props.curr;

    return (
        <li className="Main">
            <div className="image">
                <img src={img_url} alt="" height="50%" width="50%" />
            </div>
            <h2>Name:{name}</h2>
            <h3>Rating:{rating}</h3>
            <p>Summary:{description}</p>
            <p>Genre:{genre}</p>
            <p>Cast:{cast}</p>
            <a href={watch_url} target="_blank">
                <button>Watch now</button>
            </a>  
        </li>
    );
};
