import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';


const todo1 = new Todo('Teste 1 REDUX / Angular');
const todo2 = new Todo('Teste 2 REDUX / Angular');
const todo3 = new Todo('Teste 3 REDUX / Angular');

// todo2.completo = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];


export function todoReducer(state = estadoInicial,
  action: fromTodo.Acciones): Todo[] {

  switch (action.type) {

    case fromTodo.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];


    // Marca todos os campos como checado
    case fromTodo.TOGGLE_ALL_TODO:
      return state.map(todoEdit => {
        return {
          ...todoEdit,
          completo: action.completo
        };
      });


    // Ao clickar mudo o estado  - ( Edição).
    // Ao clickar mudo o estado para completado editando o estilo.
    case fromTodo.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completo: !todoEdit.completo
          };
        } else {
          return todoEdit;
        }
      });

    // Editando texto
    case fromTodo.EDITAR_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.texto
          };
        } else {
          return todoEdit;
        }
      });

    case fromTodo.BORRAR_TODO:
      return state.filter(todoEdit => todoEdit.id !== action.id);

    case fromTodo.BORRAR_ALL_TODO:
      return state.filter(todoEdit => !todoEdit.completo);


    default:
      return state;

  }

}


