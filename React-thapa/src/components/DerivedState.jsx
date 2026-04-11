import React, { useState } from "react";

export const DerivedState = () => {

    // This is our State Logic
    const [users] = useState(
        [
            { name: "yash", age: 20 },
            { name: "Jay", age: 30 },
            { name: "Kabir", age: 20 },
            { name: "Kalpesh", age: 30 },
        ]
    );

    // Derived state: count of users
    console.log(users);
    const usercount = users.length;

    const Averageage = users.reduce((accum, curElem) => accum + curElem.age, 0 ) / usercount ;

    return (
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                {users.map((user) => (
                    <li>
                        {user.name} - {user.age} years old
                    </li>
                ))}
            </ul>
            <li>UserCount : {usercount}</li>
            <li>Averageage : {Averageage}</li>
        </div>
    );
};