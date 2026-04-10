import React, { useState } from "react";

export const DerivedState = () => {

    // This is our State Logic
    const [users, setUsers] = useState([
        { name: "yash", age: 20 },
        { name: "Jay", age: 30 },
        { name: "Kabir", age: 22 },
        { name: "Kalpesh", age: 23 },
    ]);

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

        </div>
    );
};