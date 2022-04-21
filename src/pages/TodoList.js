import React from "react";
import { useEffect, useState } from "react";
import Todoitems from "../components/Todoitems";
const url = "https://jsonplaceholder.typicode.com/todos";
function TodoList() {
  const [todo, setTodos] = useState([]);
  /////////// feth Todos ////////////

  const fetchTodos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setTodos(data);

    try {
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  /////// done ////////

  return (
    <>
      <Todoitems todo={todo} />
    </>
  );
}

export default TodoList;
