import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsStorageService } from '../../services/news-storage.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  public addNewsForm: FormGroup = new FormGroup({
    heading: new FormControl('', Validators.required),
    shortDescription: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    source: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required)
  });

  constructor(
    private newsStorageService: NewsStorageService,
    public dialogRef: MatDialogRef<AddArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {}

  public addNews(): void {
    this.newsStorageService.addNews({
      id: this.newsStorageService.$list.value.length + 1,
      heading: this.addNewsForm.value.heading,
      shortDescription: this.addNewsForm.value.shortDescription,
      content: this.addNewsForm.value.content,
      date: this.addNewsForm.value.date,
      author: this.addNewsForm.value.author,
      source: this.addNewsForm.value.source,
      imageUrl: this.addNewsForm.value.imageUrl
    });
    this.dialogRef.close();
  }

  public cancelAddingNews(): void {
    this.dialogRef.close();
  }
}
