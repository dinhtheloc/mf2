import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mf2Component } from './mf2.component';

const routes: Routes = [{
  path: '',
  component: Mf2Component,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf2RoutingModule { }
