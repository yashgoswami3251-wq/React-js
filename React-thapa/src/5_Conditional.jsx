import React from "react";
export const App = () => {

    return (
        <>
         <Netflixseries />
        </>
    )
};

const Netflixseries = () => {
    const Name = "Money heist";
    const Rating = "9.8";
    const Summary = "Their first plan is to enter the Royal Mint of Spain in Madrid and print billions of euros instead of stealing existing money. They take hostages and try to stay inside long enough to print the cash while the Professor controls everything from outside.";
    const age = 19;

    let age1 = 12;

    let canwatch = "Not available";
    if(age1 >= 18) canwatch = "Watch-now";

    if(age)
    return (
        <div>

            <div>
                <img src="Moneyheist.jpg" alt="Moneyheist.jpg" height="50%" width="50%" />
            </div>

            <h2>Name: {Name} </h2>
            <h3>Rating: {5+4.8}</h3>
            <p>Summary: {Summary}</p>

            <button>{age >= 19 ? "Watch-now" : "Not available"}</button>
            <button>{canwatch}</button>

        </div>
    );
};
