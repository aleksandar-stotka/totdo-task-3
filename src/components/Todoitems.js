import React from "react";

function Todoitems({ deleteTodos, todo }) {
  return (
    <div className="container">
      <section className="section-center">
        <main className="row">
          <div className="col s12 m6">
            {todo.map((item) => {
              const { id, title, completed } = item;
              return (
                <div className="card blue-grey" key={id}>
                  <div className="card-content white-text">
                    <span className="card-title">{title}</span>
                    <span>{completed}</span>
                  </div>
                  <button onClick={() => deleteTodos(id)} className="btn">
                    delete
                  </button>
                </div>
              );
            })}
          </div>
        </main>
      </section>
    </div>
  );
}

export default Todoitems;
