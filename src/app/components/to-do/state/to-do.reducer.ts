import * as fromRoot from '../../../state/index'
import { TaskItem } from "../../task-item/task-item.model";
import { ToDoActionTypes, ToDoActionUnion } from "./to-do.actions";

export interface State extends fromRoot.State{
  toDo: ToDoState,
}

export interface ToDoState {
  taskList: TaskItem[]
}
export const initialToDoState: ToDoState = {
  taskList: []

}

export const toDoReducer = (
  state: ToDoState = initialToDoState,
  action: ToDoActionUnion
  ): ToDoState=> {
  switch (action.type) {
    case ToDoActionTypes.CREATE_TASK: {
      const newId: number = state.taskList.length + 1;
      const newTask: TaskItem = {
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
      const taskToChange = state.taskList.find((t)=> t.id === id) as TaskItem

      return {
        taskList: [...state.taskList, {
          id,
          text,
          createdAt: taskToChange.createdAt
        }]
      }
    }
    case ToDoActionTypes.DELETE_TASK: {
      const newTaskList: TaskItem[] = state.taskList.filter(t=> t.id !== action.payload)

      return {
        taskList: [...newTaskList.sort((a,b)=> a.id - b.id)]
      }
    }
    default: {
      return state
    }
  }
}

export const selectTasks = (state: State) => state.toDo.taskList;
