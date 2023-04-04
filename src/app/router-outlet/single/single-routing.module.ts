import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FirstChildComponent} from "./components/first-child/first-child.component";
import {SecondChildComponent} from "./components/second-child/second-child.component";
import {ParentComponent} from "./components/parent/parent.component";

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
        redirectTo: 'first-child',
        pathMatch: 'full'
      },
      {
        path: 'first-child',
        component: FirstChildComponent
      },
      {
        path: 'second-child',
        component: SecondChildComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleRoutingModule {
}
