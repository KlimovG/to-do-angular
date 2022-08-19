import {Component, Input, OnInit} from '@angular/core';
import {TaskItem} from "../task-item/task-item.model";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {
  @Input()tasks!: TaskItem[] | null;
  constructor() { }

  ngOnInit(): void {
  }

}
