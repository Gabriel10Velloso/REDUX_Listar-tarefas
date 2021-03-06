import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Add todo';

// Pegando a ação para editar o estilo checked
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle ALL todo';

// Pegando a ação para editar o texto
export const EDITAR_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const BORRAR_ALL_TODO = '[TODO] Borrar all todo';


export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;

    constructor( public texto: string ) {}
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    // ID do Todo que preciso alterar para editar o estilo da classe
    constructor( public id: number ) {}
}

// Selecionando todos os campos
export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;
    constructor( public completo: boolean ) {}
}

// Editando Texto
export class EditarTodoAccion implements Action {
    readonly type = EDITAR_TODO;
    constructor( public id: number, public texto: string ) {}
}

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;

    constructor( public id: number ) {}
}

// Apagar todas tarefas executadas
export class BorrarAllTodoAction implements Action {
    readonly type = BORRAR_ALL_TODO;
}



export type Acciones = AgregarTodoAction | EditarTodoAccion |
                       BorrarTodoAction | BorrarAllTodoAction |
                       ToggleAllTodoAction | ToggleTodoAction;
