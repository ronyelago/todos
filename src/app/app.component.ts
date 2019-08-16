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
    this.todos.push(new Todo(){ todo: });
    this.todos.push('ir ao supermercado');
    this.todos.push('cortar o cabelo');
    // this.todos.push(1987);
  }

  alteraTexto(){
    this.title = 'Teste';
  }

  remove(){
    this.todos.pop();
  }
}
