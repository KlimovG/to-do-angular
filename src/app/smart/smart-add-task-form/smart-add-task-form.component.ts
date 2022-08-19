import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {ToDoTaskCreate} from "../../components/to-do/state/to-do.actions";
import {State} from "../../components/to-do/state/to-do.reducer";

@Component({
  selector: 'app-smart-add-task-form',
  templateUrl: './smart-add-task-form.component.html',
  styleUrls: ['./smart-add-task-form.component.sass']
})
export class SmartAddTaskFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private store: Store<State>,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.initForm()
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      text: ''
    })
  }

  onSubmit(text: string): void {
    this.store.dispatch(new ToDoTaskCreate(text))
  }
}
