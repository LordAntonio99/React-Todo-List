import React, { useEffect, useState } from "react";
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
        
  useEffect(() => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
          default:
            setFilteredTodos(todos);
            break;
          }
  }, [todos, status])
        
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
        <TodoInput setInputText={setInputText} inputText={inputText} setTodos={setTodos} todos={todos}  setStatus={setStatus}/>
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
