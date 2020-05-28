import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsByIdComponent } from './news-by-id.component';

const routes: Routes = [
  {
    path: '',
    component: NewsByIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsByIdRoutingModule { }
