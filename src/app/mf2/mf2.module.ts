import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mf2RoutingModule } from './mf2-routing.module';
import { Mf2Component } from './mf2.component';


@NgModule({
  declarations: [
    Mf2Component
  ],
  imports: [
    CommonModule,
    Mf2RoutingModule
  ]
})
export class Mf2Module { }
