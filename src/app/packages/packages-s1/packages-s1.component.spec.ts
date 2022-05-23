import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesS1Component } from './packages-s1.component';

describe('PackagesS1Component', () => {
  let component: PackagesS1Component;
  let fixture: ComponentFixture<PackagesS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagesS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
