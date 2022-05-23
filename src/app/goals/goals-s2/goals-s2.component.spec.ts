import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsS2Component } from './goals-s2.component';

describe('GoalsS2Component', () => {
  let component: GoalsS2Component;
  let fixture: ComponentFixture<GoalsS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
