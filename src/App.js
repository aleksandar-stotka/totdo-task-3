import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = "https://jsonplaceholder.typicode.com/todos";
function App() {
  const fetchTodos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    try {
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  });

  return (
    <>
      <div>todos</div>
    </>
  );
}

export default App;
