import {Task} from "../../task-item/task-item.model";
import {ToDoActionTypes, ToDoActionUnion} from "./to-do.actions";

export interface ToDoState {
  taskList: Task[]
}
export const initialToDoState: ToDoState = {
  taskList: [
    {
      id: 0,
      text: '',
      createdAt: new Date()
    }
  ]

}

export function toDoReducer(state: ToDoState = initialToDoState, action: ToDoActionUnion): ToDoState {
  switch (action.type) {
    case ToDoActionTypes.CREATE_TASK:
    case ToDoActionTypes.CHANGE_TASK:
    case ToDoActionTypes.DELETE_TASK:
    default: {
      return state
    }
  }
}
