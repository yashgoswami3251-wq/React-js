{/* in this file we are using props here <Netflixseries /> 
    is called Netflicserisloop.jsx in this file we are called
    seriesCard.jsx is our child component use parent component data this concept called props


    And here file SeriesCard.jsx used Destructuring concept used 
    */}

import Netflixseries from "./components/Netflixserisloop";
import "./components/Netflix.css"; 
// Here we are use component in Netflix.css used to h1

export const App = () => {
    return (
    <section className="container">
        <h1 className="card-heading">List of best Netflix Series</h1>
        <Netflixseries />
    </section>
    );
};