import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesS4Component } from './packages-s4.component';

describe('PackagesS4Component', () => {
  let component: PackagesS4Component;
  let fixture: ComponentFixture<PackagesS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagesS4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
