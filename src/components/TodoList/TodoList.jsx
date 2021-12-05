import React from "react";
import Todos from "../Todos";

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => {
                    return (
                        <Todos key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} id={todo.id} todo={todo}/>
                    )
                })}

            </ul>
        </div>
    );
}

export default TodoList;