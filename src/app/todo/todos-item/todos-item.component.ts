import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { ToggleTodoAction, EditarTodoAccion, BorrarTodoAction } from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('txtInputFisico', {static: true}) txtInputFisico: ElementRef;

  
  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.chkField = new FormControl( this.todo.completo );
    this.txtInput = new FormControl( this.todo.texto, Validators.required );

    // Pegando as alterações do campo check field;
    this.chkField.valueChanges
    .subscribe( () => {
      const accion = new ToggleTodoAction( this.todo.id );
      this.store.dispatch( accion );
    });
  }

  editar() {
    this.editando = true;
    setTimeout( () => {
      this.txtInputFisico.nativeElement.select();
      // this.txtInputFisico.nativeElement.focus();
    }, 1);
  }

  // Ação de Edição 
  terminarEdicao() {
    this.editando = false;

    if ( this.txtInput.invalid ) {
      return;
    }

    if ( this.txtInput.value === this.todo.texto ) {
      return;
    }

    const accion = new EditarTodoAccion(this.todo.id, this.txtInput.value );
    this.store.dispatch( accion );

  }


  borrarTodo() {

    const accion = new BorrarTodoAction( this.todo.id );
    this.store.dispatch( accion );
  }

}
