import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create, deleteC, deleteT, edit, toggle, toggleAll } from './todo.actions';

export const initialState:Todo[] = [
  new Todo('nuevo reducer'),
  new Todo('comprar pan'),
  new Todo('salvar al mundo'),
  new Todo('dormir'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, {texto}) => [...state, new Todo(texto)]), // agrega nuevo todo, retorna un nuevo estado, previene mutación del obj con .push
  on(toggle, (state, {id}) => {
    return state.map(
      // map barre cada elem
      // los transforma y regresa un nuevo arreglo

      todo => {
        if (todo.id === id) {
          // no se debe hacer, porque se muta el objeto, pero se debe retornar un NUEVO estado
          // es pasado por referencia, y se manipula en base a la referencia, luego las devtools no funcionan bien tampoco
          /// todo.completado = !todo.completado; 
          // return todo;
          // la siguiente sí crea un nuevo objeto, con el operador spread ...
          return {
            ...todo,
            completado: !todo.completado // sobreescribe el completado
          }
        } else {
          return todo;
        }
      }
    )
  }),
  on(edit, (state, {id, texto}) => {
    return state.map(
      // map barre cada elem
      // los transforma y regresa un nuevo arreglo

      todo => {
        if (todo.id === id) {
          // no se debe hacer, porque se muta el objeto, pero se debe retornar un NUEVO estado
          // es pasado por referencia, y se manipula en base a la referencia, luego las devtools no funcionan bien tampoco
          /// todo.completado = !todo.completado; 
          // return todo;
          // la siguiente sí crea un nuevo objeto, con el operador spread ...
          return {
            ...todo,
            texto //ec6
          }
        } else {
          return todo;
        }
      }
    )
  }),
  on(deleteT, (state, {id} ) => state.filter(todo => todo.id !== id )), // filter también retorna un nuevo objeto
  on(toggleAll, (state, {completado} ) => state.map(
    // map barre cada elem
    // los transforma y regresa un nuevo arreglo

    todo => {
      return {
        ...todo,
        completado //ec6
      }
    }
  )),
  on(deleteC, (state) => {
    return state.filter(todo => todo.completado === false);
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}