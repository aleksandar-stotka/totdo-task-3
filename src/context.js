import React, { useState, useContext, useEffect } from "react";
import Loading from "./components/Loading";
import TodoList from "./pages/TodoList";

const AppContext = React.createContext();
const url = "https://jsonplaceholder.typicode.com/todos";
const usersUrl = "https://jsonplaceholder.typicode.com/users";
const AppProvider = ({ children }) => {
  const [todo, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [completedTodo, setCompletedTodo] = useState(null);
  const [loading, setLoading] = useState(false);
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
  const completedHandler = () => {
    const newCompletedHandler = todo.completed;
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  /////// done ////////

  return (
    <AppContext.Provider
      value={{
        todo,
        loading,
        deleteTodos,
        completedHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
