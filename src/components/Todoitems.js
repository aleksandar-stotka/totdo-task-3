import React from "react";
import { Link } from "react-router-dom";
function Todoitems({ deleteTodos, todo, completedHandler }) {
  return (
    <div className="container">
      <section className="section-center">
        <main className="row">
          <div className="col s12 m6">
            {todo.map((item) => {
              const { title, completed, id } = item;
              return (
                <>
                  <Link className="card blue-grey" key={id} to={`/user/${id}`}>
                    <div className="card-content dark-text">
                      <span className="card-title">{title}</span>
                      <span>{completed}</span>
                    </div>
                  </Link>
                  <button onClick={() => deleteTodos(id)} className="btn">
                    delete
                  </button>
                  <button onClick={completedHandler} className="btn">
                    completed
                  </button>
                </>
              );
            })}
          </div>
        </main>
      </section>
    </div>
  );
}

export default Todoitems;
