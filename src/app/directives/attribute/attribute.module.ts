import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AttributeRoutingModule} from './attribute-routing.module';
import {AttributeComponent} from './attribute.component';
import {HighlightDirective} from "./highlight.directive";


@NgModule({
  declarations: [AttributeComponent, HighlightDirective],
  exports: [HighlightDirective],
  imports: [CommonModule, AttributeRoutingModule]
})
export class AttributeModule {
}
