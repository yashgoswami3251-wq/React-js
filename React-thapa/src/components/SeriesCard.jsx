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

const style_btn = {
    padding: "1.2rem",
    border: "none",
    backgroundColor: "pink"
}

const ratting_style = {
    fontStyle: "italic",
}

import "/src/components/Netflix.css";
{/* Destructuring in react.js ->*/ }
export const SeriesCard = (props) => {

    const { img_url, name, rating, description, genre, cast, watch_url, Name } = props.curr;

    return (
        <li className="Card">
            <div className="image">
                <img src={img_url} alt="" height="50%" width="50%" />
            </div>

            {/* Inline css {{}} using first of fall enter in js and after create object <h2 style={{ margin: "1.2rem 0" }}>Name:{name}</h2> */}
            <div className="Card-container">

                <h2 style={ratting_style}>Name:{name}</h2>
                <h3 style={ratting_style}>Rating:{rating}</h3>
                <p>Summary:{description}</p>
                <p>Genre:{genre}</p>
                <p>Cast:{cast}</p>
                <a href={watch_url} target="_blank">
                    <button style={style_btn}>Watch now</button>
                </a>

            </div>
        </li>
    );
};
