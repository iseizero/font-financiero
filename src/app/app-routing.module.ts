import { DetailComponent } from './components/detail/detail.component';
import { InitComponent } from './components/init/init.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'init', component: InitComponent },
  { path: 'detail' , component: DetailComponent },
  { path: '**', component: InitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
