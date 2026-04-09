import { useState } from "react";

export const State = () => {

    // count is current value , and setCount is updated variable valur , and useState(0) take a initial valur 
    const [count, setCount] = useState(0);
    
    console.log("Parent component Rendered");

    const Increamentbutton = () => {
        setCount(() => count + 1);
        console.log(count);
    }

    return (
        <>
        <div className="main-div">
            <h1 style={{ marginLeft: "570px" }}>{count}</h1>
            <button onClick={Increamentbutton} style={{ backgroundColor: "yellow", fontSize: "30px", marginLeft: "500px" }}>Increament</button>
        </div>
        <Childstate count={count}/>
        </>
    );
};

function Childstate({ count }) {
    console.log("Child component rendered");

    return (
        <div>
            <h2> Child Component : {count} </h2>
        </div>
    );
};


