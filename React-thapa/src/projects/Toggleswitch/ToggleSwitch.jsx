import { useState } from "react";
import "./ToggleSwitch.css";

// Here we are import { IoIosSwitch } this icons from react icons library 

import { IoIosSwitch } from "react-icons/io";


export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    };

    const checkIsOn = isOn ? "on" : "off";
    const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "" };

    return (
        <>
            <h1> Toggle Siwtch <IoIosSwitch style={{ color: "yellow" }} /></h1>
            
            <div className="toggle-switch" style={toggleBGColor} onClick={handleToggleSwitch}>
                <div className={`switch ${checkIsOn}`}>
                    <span className="switch-state">{checkIsOn}</span>
                </div>
            </div>
        </>
    );
};