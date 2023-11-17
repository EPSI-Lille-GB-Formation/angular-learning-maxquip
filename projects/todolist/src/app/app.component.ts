import { Component } from '@angular/core';
import { TODOS } from './mock-todo';

@Component({
  selector: 'app-root',
  template:`
    <div class="container">
    <h1>Liste de choses à faire</h1>
    <ul >
      <ng-container *ngFor="let todos of todolist">
      <li *ngIf="todos.isCompleted">{{todos.title}}</li>
      </ng-container>
    </ul>
    </div>
  `,
  styles: []
})
export class AppComponent {
  todolist = TODOS;

  ngOnInit(){
    console.table(this.todolist);
    this.selectTodo(8);
  }

  selectTodo(id: number){
    console.table(this.todolist[id-1]);
  }
}
