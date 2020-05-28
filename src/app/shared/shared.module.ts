import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { AddArticleComponent } from './dialogs/add-article/add-article.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchComponent,
    AddArticleComponent,
    NewsItemComponent
  ],
  entryComponents: [
    AddArticleComponent
  ],
  exports: [
    SearchComponent,
    NewsItemComponent,
    AddArticleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
