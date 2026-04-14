import { useState } from "react";
import "./Todo.css";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
    const[inputvalue, setInputvalue] = useState("");
    const [task, setTask] = useState([]);

    const handleInputchange = (value) =>{
        setInputvalue(value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if(!inputvalue) return;

        if(task.includes(inputvalue)) {
            setInputvalue("");
             return;
        }

        setTask((prevTask) => [...prevTask, inputvalue]);

        setInputvalue("");
    };

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off" value={inputvalue} onChange={(event) => handleInputchange(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">Add Task</button>
                    </div>
                </form>
            </section>

            <section className="myUnOrdList">
                 <ul>
                    {
                        task.map((curTask, index) => {
                            return <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <button className="check-btn">
                                    <MdCheck />
                                </button>
                                <button className="delete-btn">
                                    <MdDeleteForever />
                                </button>
                            </li>
                        })
                    }
                 </ul>
            </section>
        </section>
    );
};