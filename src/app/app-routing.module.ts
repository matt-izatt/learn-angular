import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'component-factory',
    loadChildren: () => import('./component-factory/component-factory.module').then(m => m.ComponentFactoryModule)
  },
  {
    path: 'router-outlet',
    loadChildren: () => import('./router-outlet/router-outlet.module').then(m => m.RouterOutletModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
