import { Component } from "@angular/core";
import { empty } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "todo-App";
  items: Array<String>;
  count: number;
  task: string;
  activeTask: number;
  completedTask: number;

  constructor() {
    this.items = [];
    this.count = 0;
    this.task = null;
    this.activeTask = 0;
    this.completedTask = 0;
  }

  addTodo(): void {
    if (this.task === null) alert("Please input your task");
    else {
      this.items.push(this.task);
      this.count += 1;
      this.task = null;
    }
  }
  click() {
    console.log("on check");
  }
}
