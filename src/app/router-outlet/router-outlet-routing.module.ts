import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'multiple', loadChildren: () => import('./multiple/multiple.module').then(m => m.MultipleModule)},
  {path: 'single', loadChildren: () => import('./single/single.module').then(m => m.SingleModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterOutletRoutingModule {
}
