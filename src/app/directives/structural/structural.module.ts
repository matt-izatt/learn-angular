import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StructuralRoutingModule} from './structural-routing.module';
import {StructuralComponent} from './structural.component';
import {UnlessDirective} from './unless.directive';


@NgModule({
  declarations: [StructuralComponent, UnlessDirective],
  imports: [
    CommonModule,
    StructuralRoutingModule
  ]
})
export class StructuralModule {
}
