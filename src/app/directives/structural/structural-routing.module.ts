import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {StructuralComponent} from './structural.component';

const routes: Routes = [{path: '', component: StructuralComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructuralRoutingModule {
}
