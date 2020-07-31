import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [{
  path: 'component-factory',
  loadChildren: () => import('./component-factory/component-factory.module').then(m => m.ComponentFactoryModule)
},
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
