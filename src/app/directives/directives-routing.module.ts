import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'components', pathMatch: 'full'},
  {path: 'components', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)},
  {path: 'structural', loadChildren: () => import('./structural/structural.module').then(m => m.StructuralModule)},
  {path: 'attribute', loadChildren: () => import('./attribute/attribute.module').then(m => m.AttributeModule)}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule {
}
