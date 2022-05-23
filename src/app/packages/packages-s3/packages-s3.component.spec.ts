import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesS3Component } from './packages-s3.component';

describe('PackagesS3Component', () => {
  let component: PackagesS3Component;
  let fixture: ComponentFixture<PackagesS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagesS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
