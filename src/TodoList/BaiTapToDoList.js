import React from "react";
import { useSelector } from "react-redux";
import DoneTaskComponent from "./DoneTaskComponent";
import InputTaskComponent from "./InputTaskComponent";
import ToDoTaskCompo from "./ToDoTaskCompo";

export default function BaiTapToDoList() {
  let editTask = useSelector((root) => root.ToDoReducer.editTask);
  return (
    <div className="container">
      <InputTaskComponent editTask={editTask} />
      <ToDoTaskCompo />
      <DoneTaskComponent />
    </div>
  );
}
