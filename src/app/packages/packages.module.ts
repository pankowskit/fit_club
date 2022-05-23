import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages/packages.component';
import { PackagesS1Component } from './packages-s1/packages-s1.component';
import { PackagesS2Component } from './packages-s2/packages-s2.component';
import { PackagesS3Component } from './packages-s3/packages-s3.component';
import { PackagesS4Component } from './packages-s4/packages-s4.component';


@NgModule({
  declarations: [
    PackagesComponent,
    PackagesS1Component,
    PackagesS2Component,
    PackagesS3Component,
    PackagesS4Component
  ],
  imports: [
    CommonModule,
    PackagesRoutingModule
  ]
})
export class PackagesModule { }
