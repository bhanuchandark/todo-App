import { Component, OnInit } from '@angular/core';
import { Todo } from "../../interface/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];
  todoTitle: string;
  idForTodo: number;
  filter: string;
  anyRemainingModel: boolean;

  constructor() {}

  ngOnInit() {
    this.anyRemainingModel = true;
    this.filter = "all";
    this.idForTodo = 1;
    this.todoTitle = "";
    this.todos = [];
  }

  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.idForTodo,
      title: this.todoTitle,
      completed: false
    });

    this.todoTitle = "";
    this.idForTodo++;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  remaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  checkAllTodos(): void {
    this.todos.forEach(
      todo => (todo.completed = (<HTMLInputElement>event.target).checked)
    );
    this.anyRemainingModel = this.anyRemaining();
  }

  anyRemaining(): boolean {
    return this.remaining() !== 0;
  }

  todosFiltered(): Todo[] {
    if (this.filter === "all") {
      return this.todos;
    } else if (this.filter === "active") {
      return this.todos.filter(todo => !todo.completed);
    } else if (this.filter === "completed") {
      return this.todos.filter(todo => todo.completed);
    }

    return this.todos;
  }

}

