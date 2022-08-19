import { Component, OnInit } from '@angular/core';
import {TaskItem} from "../../components/task-item/task-item.model";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {State} from "../../state";
import {selectTasks} from "../../components/to-do/state/to-do.reducer";

@Component({
  selector: 'app-smart-task-list',
  templateUrl: './smart-task-list.component.html',
  styleUrls: ['./smart-task-list.component.sass']
})
export class SmartTaskListComponent implements OnInit {
  taskList$!: Observable<TaskItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.taskList$ = this.store.select(selectTasks)
  }

}
