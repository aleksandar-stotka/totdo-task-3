import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "./pages/User";
import TodoList from "./pages/TodoList";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="user" element={<User />}>
        <Route path=":userId" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
