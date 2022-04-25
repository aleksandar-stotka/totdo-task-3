import React from "react";
import { useGlobalContext } from "../context";
import Todoitems from "../components/Todoitems";
import Loading from "../components/Loading";

///////////////////////////////////////////////
function TodoList() {
  const { todo, deleteTodos, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Todoitems todo={todo} deleteTodos={deleteTodos} />
    </>
  );
}

export default TodoList;
