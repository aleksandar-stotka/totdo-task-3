import React from "react";
import { useEffect, useState } from "react";
import Todoitems from "../components/Todoitems";
import Alert from "../components/alert/Alert";
import Loading from "../components/Loading";
import DropDown from "../components/DropDown";
const url = "https://jsonplaceholder.typicode.com/todos";
const usersUrl = "https://jsonplaceholder.typicode.com/users";

///////////////////////////////////////////////
function TodoList() {
  const [todo, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [completedTodo, setCompletedTodo] = useState(null);
  const [loading, setLoading] = useState(false);
  /////////// fetch Todos ////////////

  const deleteTodos = (id) => {
    const removeTodos = todo.filter((item) => item.id !== id);

    setTodos(removeTodos);
  };

  //////

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

  useEffect(() => {
    fetchTodos();
  }, []);
  /////// done ////////

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      {loading && <p className="loader"></p>}
      <DropDown />
      <Todoitems todo={todo} deleteTodos={deleteTodos} />
    </>
  );
}

export default TodoList;
