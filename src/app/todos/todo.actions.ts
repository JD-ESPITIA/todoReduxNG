import { createAction, props } from '@ngrx/store';

export const create = createAction('[TODO] Crear Todo', props<{texto: string}>());
export const toggle = createAction('[TODO] Toggle Todo estado', props<{id: number}>());
export const edit = createAction('[TODO] Editar Todo', props<{id: number, texto: string}>());
export const deleteT = createAction('[TODO] Borrar Todo', props<{id: number}>());
export const toggleAll = createAction('[TODO] TODOS completados', props<{completado: boolean}>());

export const deleteC = createAction('[TODO] Borrar completados');