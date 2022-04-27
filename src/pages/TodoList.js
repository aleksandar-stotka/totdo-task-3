import React from "react";
import { useState, useEffect } from "react";
import Todoitems from "../components/Todoitems";
import Loading from "../components/Loading";
const url = "https://jsonplaceholder.typicode.com/todos";
const usersUrl = "https://jsonplaceholder.typicode.com/users";
///////////////////////////////////////////////
function TodoList() {
  const [todo, setTodos] = useState([]);
  const [loading, setLoading] = useState();
  const [completed, setCompleted] = useState(null);
  const fetchTodos = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);

      const data = await response.json();

      const cutArray = data.slice(1, 10);

      console.log(data);

      setTodos(cutArray);

      const res = await fetch(usersUrl);
      const dataUsers = await res.json();
      console.log("data users", dataUsers);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteTodos = (id) => {
    const removeTodos = todo.filter((item) => item.id !== id);

    setTodos(removeTodos);
  };
  const completedHandler = (id) => {
    const newCompleted = todo.map((item) =>
      item.id === id ? !item.completed : item
    );
    console.log("new", newCompleted);
    setTodos(newCompleted);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Todoitems
        todo={todo}
        deleteTodos={deleteTodos}
        completedHandler={completedHandler}
      />
    </>
  );
}

export default TodoList;
