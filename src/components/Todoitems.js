import React from "react";
import { Link } from "react-router-dom";
function Todoitems({ deleteTodos, todo }) {
  return (
    <div className="container">
      <section className="section-center">
        <main className="row">
          <div className="col s12 m6">
            {todo.map((item) => {
              const { title, completed, id } = item;
              return (
                <Link className="card blue-grey" key={id} to={`/user/${id}`}>
                  <div className="card-content white-text">
                    <span className="card-title">{title}</span>
                    <span>{completed}</span>
                  </div>
                  <button onClick={() => deleteTodos(id)} className="btn">
                    delete
                  </button>
                </Link>
              );
            })}
          </div>
        </main>
      </section>
    </div>
  );
}

export default Todoitems;
