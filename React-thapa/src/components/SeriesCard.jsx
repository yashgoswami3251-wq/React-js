import styles from "./Netflix.module.css";
// here styles is a import module.css file

const style_btn = {
    padding: "1.2rem",
    border: "none",
    backgroundColor: "pink"
}

const ratting_style = {
    fontStyle: "italic",
}

{/* Destructuring in react.js ->*/ }
export const SeriesCard = (props) => {

    {/* Destructuring in react */ }
    const { img_url, name, rating, description, genre, cast, watch_url } = props.curr;

    return (
        <li className={styles.Card}>
            <div className={styles.image}>
                <img src={img_url} alt="" height="50%" width="50%" />
            </div>

            {/* Inline css {{}} using first of fall enter in js and after create object <h2 style={{ margin: "1.2rem 0" }}>Name:{name}</h2> */}
            <div className={styles["Card-container"]}>

                <h2 style={ratting_style}>Name:{name}</h2>

                {/* Conditional css */}
                <h3>Rating:<span className={rating >= 8.5 ? styles.super_hit : styles.average}>{rating}</span>
                </h3>

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
