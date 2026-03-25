import React from "react";

// In fragments concepts we don't use one parent node 

export const App = () => {
    // return ([<Netflixseries key="1" />, <Netflixseries key="2" />]
    // );

    return (
        // here we are use React.Fragment bcz we don't use parent node
        
        // <React.Fragment>
        //     <Netflixseries />
        //     <Netflixseries />
        // </React.Fragment>
        
        // we can also use like 
        <>
         <Netflixseries />
        </>
    )
};

// component must be declare in first letter capital letter 
const Netflixseries = () => {   // Here Netflixseries is component -> which return over jsx code  
    return (
        <div>

            <div>
                <img src="Moneyheist.jpg" alt="Moneyheist.jpg" height="50%" width="50%" />
            </div>

            <h2>Name: Money heist</h2>
            <h3>Rating:9.8</h3>

            <p>Their first plan is to enter the Royal Mint of Spain in Madrid and print billions of euros instead of stealing existing money. They take hostages and try to stay inside long enough to print the cash while the Professor controls everything from outside.</p>

        </div>
    );
};
