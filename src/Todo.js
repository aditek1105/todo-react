import React, { useState } from "react";
import data from "./data";

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
    return <Cell id={item.id} about={item.About} done={item.Done} />;
  });
};

const Cell = (props) => {
  const { id, about, done } = props;
  return <h1>{about}</h1>;
};

export default Todo;
