import React from "react";
import ToDos from "../ToDos/ToDos";

const ToDoHome = () => {
  const toDos = ["todo1", "todo2", "todo3", "todo4", "todo5"];
  return (
    <div>
      <h1>ToDoHome</h1>
      <ToDos toDos={toDos} />
    </div>
  );
};

export default ToDoHome;
