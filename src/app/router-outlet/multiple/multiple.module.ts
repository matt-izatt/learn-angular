import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MultipleRoutingModule} from './multiple-routing.module';
import {ParentComponent} from "./components/parent/parent.component";
import {FirstChildComponent} from "./components/first-child/first-child.component";
import {SecondChildComponent} from "./components/second-child/second-child.component";

@NgModule({
  declarations: [
    ParentComponent,
    FirstChildComponent,
    SecondChildComponent
  ],
  imports: [
    CommonModule,
    MultipleRoutingModule
  ]
})
export class MultipleModule {
}
