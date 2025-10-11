import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitPageComponent } from './init-page/init-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'init', pathMatch: 'full'},
  {path: 'init', component: InitPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
