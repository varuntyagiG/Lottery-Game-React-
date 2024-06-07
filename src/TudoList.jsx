import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TudoList() {
  let [todos, setTodo] = useState([
    { task: "Work", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewtodo] = useState("");

  function addNewTask() {
    setTodo((preValue) => {
      return [...preValue, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewtodo("");
  }
  function updateTodoValue(event) {
    setNewtodo(event.target.value); // value of input
  }

  function DeleteTodo(id) {
    setTodo(todos.filter((todo) => todo.id != id)); // Delete from array use filter methoud
  }

  function AllDone() {
    setTodo(
      todos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      }),
    );
  } // To update array we use map methoud (all element)

  function MarksAsDone(id) {
    setTodo(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      }),
    );
  }

  return (
    <>
      <input
        placeholder="add a item"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <h4>Todo-List</h4>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={todo.isDone ? { textDecoration: "line-through" } : {}}
              >
                {todo.task}
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => DeleteTodo(todo.id)}>Delete</button>
              <button onClick={() => MarksAsDone(todo.id)}>Mark-as-Done</button>
            </li>
          );
        })}
      </ul>
      <br />
      <button onClick={AllDone}>All-Done</button>
    </> //  Create List use map methoud
  );
}

export { TudoList };
