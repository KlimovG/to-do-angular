import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.sass']
})
export class AddTaskFormComponent implements OnInit {
  @Input() form!: FormGroup;
  @Output() onSubmit = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }

  get text(): string {
    return this.form.get('text')?.value
  }

}
