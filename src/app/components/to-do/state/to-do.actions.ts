import {Action} from '@ngrx/store';
import { TaskChange} from "../../task-item/task-item.model";

export enum ToDoActionTypes {
  CREATE_TASK = '[To Do] Create new task',
  CHANGE_TASK = '[To Do] Edit task',
  DELETE_TASK = '[To Do] Delete task',
}

export class ToDoTaskCreate implements Action {
  readonly type = ToDoActionTypes.CREATE_TASK;
  constructor(public payload: string) {}
}

export class ToDoTaskChange implements Action {
  readonly type = ToDoActionTypes.CHANGE_TASK;
  constructor(public payload: TaskChange) {}
}

export class ToDoTaskDelete implements Action {
  readonly type = ToDoActionTypes.DELETE_TASK;
  constructor(public payload: number) {}
}

export type ToDoActionUnion =
  | ToDoTaskCreate
  | ToDoTaskChange
  | ToDoTaskDelete


