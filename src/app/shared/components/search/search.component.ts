import { Component, OnInit } from '@angular/core';
import { NewsStorageService } from '../../services/news-storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private newsStorageService: NewsStorageService) { }

  ngOnInit() {}

  public filter(value: string) {
    this.newsStorageService.filterList(value);
  }
}
