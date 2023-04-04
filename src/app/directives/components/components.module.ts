import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComponentsRoutingModule} from './components-routing.module';
import {ComponentsComponent} from './components.component';
import {RegularComponent} from './regular/regular.component';
import {InlineComponent} from './inline/inline.component';


@NgModule({
  declarations: [ComponentsComponent, RegularComponent, InlineComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule {
}
