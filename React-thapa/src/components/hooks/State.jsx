import {useState} from "react";

export const State = () =>{

    // let value= 0;

    // const Increamentbutton = () =>{
    //     value++;
    //     console.log(value);
    // };

    // let array = useState();
    // console.log(array);

    // count is current value , and setCount is updated variable valur , and useState(0) take a initial valur 
     const[count, setCount] = useState(0);
     const Increamentbutton = () =>{
        setCount(() =>  count + 2);
        console.log(count);
     }

    return(
        <section className="main-div">
            <h1 style={{marginLeft:"570px"}}>{count}</h1>
            <button onClick={Increamentbutton}  style={{ backgroundColor: "yellow", fontSize: "30px", marginLeft:"500px"}}>Increament</button>  
        </section>
    );
};