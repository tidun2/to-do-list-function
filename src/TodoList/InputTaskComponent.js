import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ADD_TASK, UPDATE_TASK } from "../StoreRedux/constant/ToDoListConstant";

export default function InputTaskComponent({ editTask }) {
  const [taskName, setTaskName] = useState(editTask.taskName);

  // them task
  let dispatch = useDispatch();
  function themTask(taskName) {
    let payLoad = { id: Date.now(), taskName, isDone: false };
    let action = { type: ADD_TASK, payLoad };
    dispatch(action);
  }

  useEffect(() => {
    setTaskName(editTask.taskName);
  }, [editTask.taskName]);

  return (
    <div>
      <h1>ToDo List</h1>
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="text"
          className="inputTask form-control"
          placeholder="Nhập tên task"
          value={taskName}
          onChange={(event) => {
            setTaskName(event.target.value);
          }}
        />
        <button
          type="submit"
          className="btn btn-success mt-2"
          onClick={() => {
            themTask(taskName);
            document.querySelector(".inputTask").value = "";
          }}
        >
          Thêm task
        </button>
        <button
          type="submit"
          className="btn btn-primary mt-2 ml-3 updateBtn"
          onClick={() => {
            editTask.taskName = taskName;
            dispatch({ type: UPDATE_TASK, payLoad: editTask });
            setTaskName(editTask.taskName);
            document.querySelector(".inputTask").value = "";
            document.querySelector(".updateBtn").disabled = true;
          }}
        >
          Cập nhật task
        </button>
      </div>
    </div>
  );
}
