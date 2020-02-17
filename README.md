# Aplicação listar tarefas REDUX

````
comit - 6ec71cacc815cac78cde70fd7702d279b2b8a642
Definiendo o  AppState da aplicação app.module

````

````
commit ed34ee41543ceffb2c57db37731f521df22ab2c6
Adicionando itens (Tarefas)

````

## Controlando -- todos items
````
commit 30049b377ee3f68c06f371cfe7184264ad3fa2e3
Estilizando o campo de editar TodosItemComponent

````

## Pegando as alterações do campo check field;
````
commit 
this.chkField.valueChanges
.subscribe( () => {
  const accion = new ToggleTodoAction( this.todo.id );
  this.store.dispatch( accion );
});
````


