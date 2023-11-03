import { Component } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  todos!: Todo[];
  inputTodo: string = "";
  selectedTodoId: number = -1;

  constructor() {

  }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        content: "First Todo",
        completed: false,
      },
      {
        id: 2,
        content: "Second Todo",
        completed: false,
      },
    ]
  }

  toggleDelete(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  toggleUpdate(id: number) {
    this.selectedTodoId = id;
    const updateTodo = this.todos.find((todo) => todo.id === id);
    this.inputTodo = updateTodo ? updateTodo.content : '';
  }

  addOrUpdateTodo() {
    if (this.selectedTodoId === -1) {
      // Add a new todo
      this.todos.push({
        id: this.todos.length + 1,
        content: this.inputTodo,
        completed: false,
      });
    } else {
      // Update an existing todo
      const selectedTodo = this.todos.find((todo) => todo.id === this.selectedTodoId);
      if (selectedTodo) {
        selectedTodo.content = this.inputTodo;
      }
      // Reset selectedTodoId to -1 after updating
      this.selectedTodoId = -1;
    }
  
    // Clear the input field
    this.inputTodo = '';
  }
  

}
