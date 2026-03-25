import React from "react";

const App = () => {
    return (
        <>
            <Netflixseries />
        </>
    )
};

const Netflixseries = () => {
    const Name = "Money heist";
    const Summary = "Their first plan is to enter the Royal Mint...";

    const dyractor = () => "Professor";
    const surname = () => "Gauswami";

    return (
        <div>
            <img src="public/images/mh.jpg" alt="Moneyheist" height="50%" width="50%" />
            <h2>Name: {Name}</h2>
            <h3>Rating: {5 + 4.8}</h3>
            <p>Summary: {Summary}</p>
            <p>Genere: {dyractor()}</p>
            <p>Surname: {surname()}</p>
        </div>
    );
};

export default App;