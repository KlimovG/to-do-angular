import { Task } from "../../task-item/task-item.model";
import { ToDoActionTypes, ToDoActionUnion } from "./to-do.actions";

export interface ToDoState {
  taskList: Task[]
}
export const initialToDoState: ToDoState = {
  taskList: []

}

export const toDoReducer = (state: ToDoState = initialToDoState, action: ToDoActionUnion): ToDoState=> {
  switch (action.type) {
    case ToDoActionTypes.CREATE_TASK: {
      const newId: number = state.taskList.length + 1;
      const newTask: Task = {
        id: newId,
        text: action.payload,
        createdAt: new Date()
      }

      return {
        taskList: [...state.taskList, newTask]
      }
    }
    case ToDoActionTypes.CHANGE_TASK: {
      const {id, text} = action.payload
      const taskToChange = state.taskList.find((t)=> t.id === id) as Task

      return {
        taskList: [...state.taskList, {
          id,
          text,
          createdAt: taskToChange.createdAt
        }]
      }
    }
    case ToDoActionTypes.DELETE_TASK: {
      const newTaskList: Task[] = state.taskList.filter(t=> t.id !== action.payload)
      return {
        taskList: [...newTaskList]
      }
    }
    default: {
      return state
    }
  }
}
