import React from "react";

const Todos = ({text, id, todos, setTodos, todo}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((e) => e.id !== id))
    };

    const completeHandler = () => {
        setTodos(todos.map( item => {
           if (item.id === id) {
               return {
                   ...item,
                   completed: !item.completed,
               }
            }
            return item 
        }))
    };

    return (
        <div className="todo">
            <li className={!todo.completed ? "todo-item" : "todo-item completed"} key={id}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
};

export default Todos;