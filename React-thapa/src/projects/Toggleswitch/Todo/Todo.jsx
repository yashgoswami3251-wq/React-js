import { useEffect, useState } from "react";
import "./Todo.css";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
    const [inputvalue, setInputvalue] = useState("");
    const [task, setTask] = useState([]);

    // This is date and time state use this is bcz this is updated every second
    const [datetime, setDateTime] = useState("");

    const handleInputchange = (value) => {
        setInputvalue(value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputvalue) return;

        if (task.includes(inputvalue)) {
            setInputvalue("");
            return;
        }

        setTask((prevTask) => [...prevTask, inputvalue]);

        setInputvalue("");
    };

    // todo date and time
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const currentDate = now.toLocaleDateString();
            const currentTime = now.toLocaleTimeString();

            // used state 
            setDateTime(`${currentDate} - ${currentTime}`);
        }, 500);
        return() => clearInterval(interval);
    })

    const interval = setInterval(() => {
        const now = new Date();
        const currentDate = now.toLocaleDateString();
        const currentTime = now.toLocaleTimeString();

        setDateTime(`${currentDate} - ${currentTime}`);

    }, 100);

    // todo handleDeleteTodo function

    const handleDeleteTodo = (value) => {
        console.log(task);
        console.log(value);
        const updatedTask = task.filter((curTask) => curTask != value);
        setTask(updatedTask);
    }

    // Handle clear tododata all data functionality

    const ClearAllTodo = () =>{
        setTask([]);
    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time">{datetime}</h2>
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
                                <button className="delete-btn" onClick= {() => handleDeleteTodo(curTask)}>
                                    <MdDeleteForever />
                                </button>
                            </li>
                        })
                    }
                </ul>
            </section>
            <section className="clear-btn" onClick={ClearAllTodo}>
                <button>Clear All</button>
            </section>

        </section>
    );
};