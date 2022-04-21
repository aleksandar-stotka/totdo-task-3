import React from "react";

function Todoitems({ todo }) {
  return (
    <div className="todo-container">
      <section className="section-center">
        <main key={todo.id}>
          {todo.map((item) => {
            const { id, title, completed } = item;
            return (
              <div className="content">
                <h2>{title}</h2>
              </div>
            );
          })}
        </main>
      </section>
    </div>
  );
}

export default Todoitems;
