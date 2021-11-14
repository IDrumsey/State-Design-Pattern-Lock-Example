import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleDoorsComponent } from './multiple-doors.component';

describe('MultipleDoorsComponent', () => {
  let component: MultipleDoorsComponent;
  let fixture: ComponentFixture<MultipleDoorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleDoorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
