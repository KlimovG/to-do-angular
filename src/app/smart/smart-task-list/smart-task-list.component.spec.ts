import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTaskListComponent } from './smart-task-list.component';

describe('SmartTaskListComponent', () => {
  let component: SmartTaskListComponent;
  let fixture: ComponentFixture<SmartTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
