import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = []; // vazio - lista de qualquer tipo (object, por exemplo)
  // public todos: any[] // undefined

  public title: String = 'Minhas tarefas';

  constructor() {
    this.todos.push('passear com o cachorro');
    this.todos.push('ir ao supermercado');
    this.todos.push('cortar o cabelo');
    // this.todos.push(1987);
  }

  alteraTexto(){
    this.title = 'Teste';
  }
}
