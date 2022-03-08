import {
  ADD_TASK,
  DEL_TASK,
  DONE_TASK,
  EDIT_TASK,
  UN_DONE_TASK,
  UPDATE_TASK,
} from "./constant/ToDoListConstant";

const initialState = {
  task: [],
  taskDone: [],
  editTask: { id: 1, taskName: "", isDone: false },
};

export default (state = initialState, { type, payLoad }) => {
  switch (type) {
    case ADD_TASK: {
      let cloneTask = [...state.task];
      let indexTask = state.task.findIndex((task) => {
        return task.taskName === payLoad.taskName;
      });
      if (indexTask === -1 && payLoad.taskName !== "") {
        cloneTask.push(payLoad);
      }
      state.task = cloneTask;
      return { ...state };
    }
    case DEL_TASK: {
      let cloneTask = [...state.task];
      let cloneDoneTask = [...state.taskDone];
      let updateTask = cloneTask.filter((task) => task.taskName !== payLoad);
      let updateDoneTask = cloneDoneTask.filter(
        (task) => task.taskName !== payLoad.taskName
      );
      return { ...state, task: updateTask, taskDone: updateDoneTask };
    }
    case EDIT_TASK: {
      return { ...state, editTask: payLoad };
    }
    case UPDATE_TASK: {
      let cloneTask = [...state.task];
      let indexTask = cloneTask.findIndex((task) => {
        return task.id === payLoad.id;
      });
      if (indexTask !== -1) {
        cloneTask[indexTask] = payLoad;
      }
      state.task = cloneTask;
      return { ...state };
    }
    case DONE_TASK: {
      let taskUpdate = [...state.task];
      taskUpdate = taskUpdate.filter(
        (task) => task.taskName !== payLoad.taskName
      );
      let taskDoneUpdate = [...state.taskDone];
      taskDoneUpdate.push(payLoad);
      return { ...state, task: taskUpdate, taskDone: taskDoneUpdate };
    }
    case UN_DONE_TASK: {
      let taskUpdate = [...state.task];
      let taskDoneUpdate = [...state.taskDone];
      taskDoneUpdate = taskDoneUpdate.filter(
        (task) => task.taskName !== payLoad.taskName
      );
      taskUpdate.push(payLoad);
      return { ...state, task: taskUpdate, taskDone: taskDoneUpdate };
    }

    default:
      return state;
  }
};
