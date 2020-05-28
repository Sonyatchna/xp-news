import { Component, OnInit } from '@angular/core';
import { NewsModel } from '../../shared/interfaces/news.model';
import { NewsStorageService } from '../../shared/services/news-storage.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddArticleComponent } from '../../shared/dialogs/add-article/add-article.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public sourceName = 'My news';
  public selected = 'sourceAll';
  public newsArray: NewsModel[];
  public sources: string[];

  constructor(
    private newsStorageService: NewsStorageService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.subscribeForChanges();
  }

  private subscribeForChanges(): void {
    this.newsStorageService.$filteredList.subscribe(res => {
      this.newsArray = res;
    });
    this.newsStorageService.$list.subscribe(res => {
      this.newsArray = res;
    });
    this.newsStorageService.$sourcesList.subscribe(res => {
      this.sources = res;
    });
  }

  public openAddNewsDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '650px';
    dialogConfig.width = '500px';
    dialogConfig.position = {
      top: '50px',
      left: '34.2%'
    };
    this.dialog.open(AddArticleComponent, dialogConfig);
  }

  public sourceSelected(value: string) {
    if (value !== 'sourceAll') {
      this.newsStorageService.filterBySource(value);
      this.sourceName = value;
    } else {
      this.newsStorageService.setAllSourcesList();
      this.sourceName = 'My news';
    }
  }
}
