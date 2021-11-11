import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobinComponent } from './jobin/jobin.component';

const routes: Routes = [
  {
    path:'',
    component:JobinComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
