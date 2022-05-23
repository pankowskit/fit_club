import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals/goals.component';
import { GoalsS1Component } from './goals-s1/goals-s1.component';
import { GoalsS2Component } from './goals-s2/goals-s2.component';


@NgModule({
  declarations: [
    GoalsComponent,
    GoalsS1Component,
    GoalsS2Component
  ],
  imports: [
    CommonModule,
    GoalsRoutingModule
  ]
})
export class GoalsModule { }
