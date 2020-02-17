import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';

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
  
  constructor() { }

  ngOnInit() {

    this.chkField = new FormControl( this.todo.completo );
    this.txtInput = new FormControl( this.todo.texto, Validators.required );
  }

  editar() {
    this.editando = true;
    setTimeout( () => {
      this.txtInputFisico.nativeElement.select();
      // this.txtInputFisico.nativeElement.focus();
    }, 1);
  }

  terminarEdicao() {
    this.editando = false;
  }

}
