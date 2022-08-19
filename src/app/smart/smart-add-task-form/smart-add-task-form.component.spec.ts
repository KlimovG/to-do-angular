import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartAddTaskFormComponent } from './smart-add-task-form.component';

describe('SmartAddTaskFormComponent', () => {
  let component: SmartAddTaskFormComponent;
  let fixture: ComponentFixture<SmartAddTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartAddTaskFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartAddTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
