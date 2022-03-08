import React from "react";
import { useDispatch } from "react-redux";
import {
  DEL_TASK,
  EDIT_TASK,
  DONE_TASK,
} from "../StoreRedux/constant/ToDoListConstant";

export default function DetailTask({ task }) {
  let dispatch = useDispatch();
  return (
    <div className="row my-2">
      <div className="col-9">
        <input
          type="checkbox"
          className="mr-3"
          onClick={() => {
            let payLoad = {
              id: Date.now(),
              taskName: task.taskName,
              isDone: true,
            };
            dispatch({ type: DONE_TASK, payLoad });
          }}
        />
        <span>{task.taskName}</span>
      </div>
      <div className="col-3">
        <button
          type="button"
          className="btn btn-primary mr-2"
          onClick={() => {
            dispatch({ type: EDIT_TASK, payLoad: task });
            document.querySelector(".updateBtn").disabled = false;
          }}
        >
          Chỉnh sửa
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            dispatch({ type: DEL_TASK, payLoad: task.taskName });
          }}
        >
          Xóa
        </button>
      </div>
    </div>
  );
}
