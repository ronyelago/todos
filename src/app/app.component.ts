import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Minhas tarefas';

  constructor() {
    this.todos.push(new Todo('Passear com o cachorro', false, 1));
    this.todos.push(new Todo('ir ao supermercado', false, 2));
    this.todos.push(new Todo('cortar o cabelo', true, 3));
  }

  alteraTexto(){
    this.title = 'Teste';
  }

  remove(){
    this.todos.pop();
  }
}
