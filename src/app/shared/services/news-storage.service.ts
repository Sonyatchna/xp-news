import { Injectable } from '@angular/core';
import { NewsModel } from '../interfaces/news.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsStorageService {
  public readonly $list: BehaviorSubject<NewsModel[]> = new BehaviorSubject(null);
  public readonly $filteredList: BehaviorSubject<NewsModel[]> = new BehaviorSubject(null);
  public readonly $sourcesList: BehaviorSubject<string[]> = new BehaviorSubject(null);
  public currentFilterValue = '';
  private currentSource = '';

  constructor() {
    const newsFromLS = JSON.parse(localStorage.getItem('news')) || [];
    this.setInitialNews(newsFromLS);
    this.setInitialSources(newsFromLS);
  }

  public setNewList(list: NewsModel[]): void {
    localStorage.setItem('news', JSON.stringify(list));
    this.$list.next(list);
  }

  public setInitialNews(news: NewsModel[]): void {
    this.$list.next(news ? news : []);
  }

  public addNews(news: NewsModel): void {
    const currentNews = this.$list.value;
    currentNews.push(news);
    this.setNewList(currentNews);
  }

  public getNewsInfoById(newsId: number): NewsModel {
    const newsFromLS = JSON.parse(localStorage.getItem('news')) || [];
    return newsFromLS.find(news => news.id === newsId);
  }

  public filterList(filterValue: string): void {
    this.currentFilterValue = filterValue;
    let filteredList: NewsModel[] = [];
    if (filterValue) {
      filteredList = this.$list.value.filter(news => news.heading.toLowerCase().includes(filterValue.toLowerCase()));
    } else {
      filteredList = this.$list.value;
    }
    if (this.currentSource) {
      this.$filteredList.next(filteredList.filter(el => el.source === this.currentSource));
    } else {
      this.$filteredList.next(filteredList);
    }
  }

  public setInitialSources(news: NewsModel[]): void {
    if (news && news.length) {
      const sources = news.reduce((accum, item) => {
        if (!accum.includes(item.source)) {
          accum.push(item.source);
        }
        return accum;
      }, []);
      this.$sourcesList.next(sources);
    } else {
      this.$sourcesList.next([]);
    }
  }

  public setAllSourcesList() {
    this.$filteredList.next(
      this.$list.value.filter(el => el.heading.toLowerCase().includes(this.currentFilterValue.toLowerCase()))
    );
  }

  public filterBySource(source: string) {
    this.currentSource = source;
    const filteredList = this.$list.value
      .filter(el =>
        el.heading.toLowerCase().includes(this.currentFilterValue.toLowerCase())
      );
    this.$filteredList.next(filteredList.filter(el => el.source === source));
  }
}
