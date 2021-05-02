
// indica cómo se encuentra e app state globald e la aplicación

import { Todo } from "./todos/models/todo.model";
import { ActionReducerMap } from "@ngrx/store";
import { todoReducer } from "./todos/todo.reducer";
import { filtrosValidos } from "./filtro/filtro.actions";
import { filterReducer } from './filtro/filtro.reducer';

export interface AppState {
    todos: Todo[],
    filtro: filtrosValidos
}


export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filterReducer

}