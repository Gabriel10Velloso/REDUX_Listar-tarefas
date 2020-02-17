import { Component, OnInit } from '@angular/core';
import { ToggleAllTodoAction } from './todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completo = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completo = !this.completo;
    const accion = new ToggleAllTodoAction(this.completo);
    this.store.dispatch( accion );
  }

}
