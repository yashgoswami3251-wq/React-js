import React, { useState } from "react";

export const DerivedState = () => {

    const [users, setUsers] = useState([
        { name: "yash", age: 25 },
        { name: "Jay", age: 30 },
        { name: "yash", age: 35 },
        { name: "yash", age: 45 },
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