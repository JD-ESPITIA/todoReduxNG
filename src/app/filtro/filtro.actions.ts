import { createAction, props} from '@ngrx/store'

export type filtrosValidos = 'todos' | 'completados' | 'pendientes'; // los filtros válidos de la app



export const filter = createAction('[Filtro] Set filtro', props<{filtro: filtrosValidos}>());
