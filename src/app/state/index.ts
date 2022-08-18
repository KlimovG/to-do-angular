import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {toDoReducer, ToDoState} from "../components/to-do/state/to-do.reducer";

export interface State {
  toDo: ToDoState,
}

export const reducers: ActionReducerMap<State, any> = {
  toDo: toDoReducer,
};

export const metaReducers: Array<MetaReducer<State>> = [];
