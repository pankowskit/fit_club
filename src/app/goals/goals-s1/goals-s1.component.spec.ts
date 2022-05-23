import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsS1Component } from './goals-s1.component';

describe('GoalsS1Component', () => {
  let component: GoalsS1Component;
  let fixture: ComponentFixture<GoalsS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
