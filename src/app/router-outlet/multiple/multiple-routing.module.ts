import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ParentComponent} from "./components/parent/parent.component";
import {FirstChildComponent} from "./components/first-child/first-child.component";
import {SecondChildComponent} from "./components/second-child/second-child.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'parent',
    pathMatch: 'full'
  },
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      {
        path: '',
        component: FirstChildComponent,
        outlet: 'first'
      },
      {
        path: '',
        component: SecondChildComponent,
        outlet: 'second'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultipleRoutingModule {
}
