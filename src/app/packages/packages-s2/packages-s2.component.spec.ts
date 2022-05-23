import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesS2Component } from './packages-s2.component';

describe('PackagesS2Component', () => {
  let component: PackagesS2Component;
  let fixture: ComponentFixture<PackagesS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagesS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
