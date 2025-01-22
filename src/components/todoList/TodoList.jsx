import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./todolist.css";

const TodoList = () => {
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState([]);
  
    //Get user input text
    const getInputValue = (e) => {
      // Log the input value to the console
      //console.log(e.target.value);
      setText(e.target.value);
    };
    //Get todo list by add button click
    const getListItem = () => {
      //console.log(text);
      //setTodoList(text);
      let copyTodoList = [...todoList, text];
      setTodoList(copyTodoList);
      setText("");
    };
    //Delete Task > Return items whose index starts from 1, 2..so on
    //index = 1. to delete particular item.but id should be 0, 1, 2 so on...
    //return if its not matched, if it is match dont return anything
    const deleteTask = (index) => {
      console.log(index);
      let filterItem = todoList.filter((item, id) => {
        return id != index;
      });
      setTodoList(filterItem);
    };
  
    //Update todoList
    useEffect(() => {
      console.log(todoList);
    }, [todoList]);
  
    return (
      <div className="todo-container">
        <h1>To Do List</h1>
        <div className="inputTask">
          <input
            type="text"
            placeholder="Enter Your Task"
            value={text}
            onChange={getInputValue}
          />
          <button onClick={getListItem} disabled={!text.trim()}>Add</button>
        </div>
        {todoList.map((curItem, index) => {
          return (
            <div className="taskItem" key={index}>
              <p>{curItem} </p>
              <div id="deleteItem" onClick={() => deleteTask(index)}>
                <FaTrash />
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  

export default TodoList