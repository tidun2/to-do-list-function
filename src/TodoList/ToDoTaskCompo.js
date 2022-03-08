import React from "react";
import { useSelector } from "react-redux";
import DetailTask from "./DetailTask";

export default function ToDoTaskCompo() {
  let arrayTask = useSelector((root) => {
    return root.ToDoReducer.task;
  });

  return (
    <div className="container">
      <h2>Nhiệm vụ chưa hoàn thành</h2>
      {arrayTask.map((task, index) => {
        return <DetailTask key={index} task={task} />;
      })}
    </div>
  );
}
