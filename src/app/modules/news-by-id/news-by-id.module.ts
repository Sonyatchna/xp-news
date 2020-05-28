import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsByIdRoutingModule } from './news-by-id-routing.module';
import { NewsByIdComponent } from './news-by-id.component';

@NgModule({
  declarations: [NewsByIdComponent],
  imports: [
    CommonModule,
    NewsByIdRoutingModule
  ]
})
export class NewsByIdModule { }
