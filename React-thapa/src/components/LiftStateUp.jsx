import { useState } from "react";

export const LiftingState = () => { 
  
  // here use LiftStateUp concept & Lifting the state Up  
  const [inputValue, setInputValue] = useState("");

  return (
    <>
    {/* Here pass the State data via props */}
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    //  const [inputValue, setInputValue] = useState(""); here we are use state then not this child coponent value access in Displaycomponent.

    <>
      <input type="text" placeholder="enter your name" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
    </>
  );
};

const DisplayComponent = ({ inputValue }) => {
  return <p>The current input value is: {inputValue} </p>;
};