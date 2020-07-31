import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComponentFactoryRoutingModule} from './component-factory-routing.module';
import {FirstChildComponent} from './components/first-child/first-child.component';
import {SecondChildComponent} from './components/second-child/second-child.component';
import {PlaceholderDirective} from './directives/placeholder.directive';
import {ParentComponent} from './components/parent/parent.component';


@NgModule({
  declarations: [
    FirstChildComponent,
    SecondChildComponent,
    PlaceholderDirective,
    ParentComponent
  ],
  imports: [
    CommonModule,
    ComponentFactoryRoutingModule
  ],
  entryComponents: [
    FirstChildComponent,
    SecondChildComponent,
  ]
})
export class ComponentFactoryModule {
}
