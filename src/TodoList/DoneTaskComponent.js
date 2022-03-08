import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DEL_TASK,
  UN_DONE_TASK,
} from "../StoreRedux/constant/ToDoListConstant";

export default function DoneTaskComponent() {
  let dispatch = useDispatch();
  let taskDone = useSelector((root) => root.ToDoReducer.taskDone);
  const [arrayTaskDone, setArrayTaskDone] = useState(taskDone);

  useEffect(() => {
    setArrayTaskDone(taskDone);
  }, [taskDone]);

  return (
    <div className="container">
      <h2>Đã hoàn thành</h2>
      {arrayTaskDone.map((task, index) => {
        return (
          <div className="row my-2" key={index}>
            <div className="col-9">
              <input
                type="checkbox"
                className="mr-3"
                checked
                onClick={() => {
                  let payLoad = {
                    id: Date.now(),
                    taskName: task.taskName,
                    isDone: false,
                  };
                  dispatch({ type: UN_DONE_TASK, payLoad });
                }}
              />
              <span>{task.taskName}</span>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  dispatch({ type: DEL_TASK, payLoad: task });
                }}
              >
                Xóa
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
