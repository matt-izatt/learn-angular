import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AttributeRoutingModule} from './attribute-routing.module';
import {AttributeComponent} from './attribute.component';


@NgModule({
  declarations: [AttributeComponent],
  imports: [
    CommonModule,
    AttributeRoutingModule
  ]
})
export class AttributeModule {
}
