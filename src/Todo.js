import React, { useState } from "react";
import data from "./data";
import App from "./App";

const Todo = () => {
  return (
    <React.Fragment>
      <Header />
      <ToDoApp />
    </React.Fragment>
  );
};

const Header = () => {
  return <h1 className="header">To do App</h1>;
};

const ToDoApp = () => {
  return data.map((item) => {
    return (
      <section className="common">
        <Cell id={item.id} about={item.About} done={item.Done} />
      </section>
    );
  });
};

const Cell = (props) => {
  const { id, about, done } = props;
  return (
    <div className="fragments">
      <h1>{id}</h1>
    </div>
  );
};

export default Todo;
