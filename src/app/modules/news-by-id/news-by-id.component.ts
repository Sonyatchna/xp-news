import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsModel } from '../../shared/interfaces/news.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NewsStorageService } from '../../shared/services/news-storage.service';

@Component({
  selector: 'app-news-by-id',
  templateUrl: './news-by-id.component.html',
  styleUrls: ['./news-by-id.component.scss']
})
export class NewsByIdComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  public news: NewsModel;

  constructor(
    private newsStorageService: NewsStorageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.getNewsById(Number(params.id));
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  public getNewsById(id: number): void {
    this.news = this.newsStorageService.getNewsInfoById(id);
  }
}
