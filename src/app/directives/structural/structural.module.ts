import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StructuralRoutingModule} from './structural-routing.module';
import {StructuralComponent} from './structural.component';


@NgModule({
  declarations: [StructuralComponent],
  imports: [
    CommonModule,
    StructuralRoutingModule
  ]
})
export class StructuralModule {
}
