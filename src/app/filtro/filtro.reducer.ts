import { createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';
import { filtrosValidos } from './filtro.actions';

export const initialState:filtrosValidos = 'todos';
// export const initialState:filtrosValidos = 'todo'; // wrong

const _filterReducer = createReducer(
  initialState,
  on(actions.filter, (state, {filtro}) => filtro),
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}