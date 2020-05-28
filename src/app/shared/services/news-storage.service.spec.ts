import { TestBed } from '@angular/core/testing';

import { NewsStorageService } from './news-storage.service';
import { NewsModel } from '../interfaces/news.model';

describe('NewsStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsStorageService = TestBed.get(NewsStorageService);
    expect(service).toBeTruthy();
  });

  it('should set news list', () => {
    const service: NewsStorageService = TestBed.get(NewsStorageService);
    const news: NewsModel[] = [{
      id: 111,
      heading: 'heading1',
      shortDescription: 'description1',
      content: 'content1',
      date: '28.05.2020',
      author: 'author1',
      source: 'source1',
      imageUrl: 'url1',
    }, {
      id: 222,
      heading: 'heading2',
      shortDescription: 'description2',
      content: 'content2',
      date: '28.05.2020',
      author: 'author2',
      source: 'source2',
      imageUrl: 'url2',
    }];
    service.setNewList(news);
    const setNews = service.$list.value;
    expect(setNews[0].id).toBe(111);
    expect(setNews[1].id).toBe(222);
  });

  it('should set initial news', () => {
    const service: NewsStorageService = TestBed.get(NewsStorageService);
    const news: NewsModel[] = [{
      id: 111,
      heading: 'heading1',
      shortDescription: 'description1',
      content: 'content1',
      date: '28.05.2020',
      author: 'author1',
      source: 'source1',
      imageUrl: 'url1',
    }, {
      id: 222,
      heading: 'heading2',
      shortDescription: 'description2',
      content: 'content2',
      date: '28.05.2020',
      author: 'author2',
      source: 'source2',
      imageUrl: 'url2',
    }];
    service.setInitialNews(news);
    const setNews = service.$list.value;
    expect(setNews[0].id).toBe(111);
    expect(setNews[1].id).toBe(222);
  });

  it('should add news', () => {
    const service: NewsStorageService = TestBed.get(NewsStorageService);
    const initialNews: NewsModel[] = [{
      id: 111,
      heading: 'heading1',
      shortDescription: 'description1',
      content: 'content1',
      date: '28.05.2020',
      author: 'author1',
      source: 'source1',
      imageUrl: 'url1',
    }, {
      id: 222,
      heading: 'heading2',
      shortDescription: 'description2',
      content: 'content2',
      date: '28.05.2020',
      author: 'author2',
      source: 'source2',
      imageUrl: 'url2',
    }];
    const news: NewsModel = {
      id: 333,
      heading: 'heading1',
      shortDescription: 'description1',
      content: 'content1',
      date: '28.05.2020',
      author: 'author1',
      source: 'source1',
      imageUrl: 'url1',
    };
    service.setInitialNews(initialNews);
    service.addNews(news);
    const currentNews = service.$list.value;
    expect(currentNews[0].id).toBe(111);
    expect(currentNews[1].id).toBe(222);
    expect(currentNews[2].id).toBe(333);
  });

  it('should get news info by id', () => {
    const service: NewsStorageService = TestBed.get(NewsStorageService);
    const news: NewsModel[] = [{
      id: 111,
      heading: 'heading1',
      shortDescription: 'description1',
      content: 'content1',
      date: '28.05.2020',
      author: 'author1',
      source: 'source1',
      imageUrl: 'url1',
    }, {
      id: 222,
      heading: 'heading2',
      shortDescription: 'description2',
      content: 'content2',
      date: '28.05.2020',
      author: 'author2',
      source: 'source2',
      imageUrl: 'url2',
    }];
    spyOn(JSON, 'parse').and.returnValue(news);
    const foundNews = service.getNewsInfoById(222);
    expect(foundNews.id).toBe(222);
  });

  it('should filter list', () => {
    const service: NewsStorageService = TestBed.get(NewsStorageService);
    const news: NewsModel[] = [{
      id: 111,
      heading: 'heading1',
      shortDescription: 'description1',
      content: 'content1',
      date: '28.05.2020',
      author: 'author1',
      source: 'source1',
      imageUrl: 'url1',
    }, {
      id: 222,
      heading: '2string2',
      shortDescription: 'description2',
      content: 'content2',
      date: '28.05.2020',
      author: 'author2',
      source: 'source2',
      imageUrl: 'url2',
    }];
    service.setInitialNews(news);
    service.filterList('string');
    service.$filteredList.subscribe(filteredNews => {
      expect(filteredNews[0].id).toBe(222);
    });
  });

  it('should set initial sources', () => {
    const service: NewsStorageService = TestBed.get(NewsStorageService);
    const news: NewsModel[] = [{
      id: 111,
      heading: 'heading1',
      shortDescription: 'description1',
      content: 'content1',
      date: '28.05.2020',
      author: 'author1',
      source: 'source1',
      imageUrl: 'url1',
    }, {
      id: 222,
      heading: 'heading2',
      shortDescription: 'description2',
      content: 'content2',
      date: '28.05.2020',
      author: 'author2',
      source: 'source2',
      imageUrl: 'url2',
    }];
    service.setInitialSources(news);
    service.$sourcesList.subscribe(sources => {
      expect(sources[0]).toBe('source1');
      expect(sources[1]).toBe('source2');
    });
  });

  it('should set all sources list', () => {
    const service: NewsStorageService = TestBed.get(NewsStorageService);
    const news: NewsModel[] = [{
      id: 111,
      heading: 'heading1',
      shortDescription: 'description1',
      content: 'content1',
      date: '28.05.2020',
      author: 'author1',
      source: 'source1',
      imageUrl: 'url1',
    }, {
      id: 222,
      heading: 'heading2',
      shortDescription: 'description2',
      content: 'content2',
      date: '28.05.2020',
      author: 'author2',
      source: 'source2',
      imageUrl: 'url2',
    }];
    service.currentFilterValue = 'heading2';
    service.setInitialNews(news);
    service.setAllSourcesList();
    service.$filteredList.subscribe(filteredList => {
      expect(filteredList[0].id).toBe(news[1].id);
    });
  });

  it('should filter by source', () => {
    const service: NewsStorageService = TestBed.get(NewsStorageService);
    const news: NewsModel[] = [{
      id: 111,
      heading: 'heading1',
      shortDescription: 'description1',
      content: 'content1',
      date: '28.05.2020',
      author: 'author1',
      source: 'source1',
      imageUrl: 'url1',
    }, {
      id: 222,
      heading: 'heading2',
      shortDescription: 'description2',
      content: 'content2',
      date: '28.05.2020',
      author: 'author2',
      source: 'source2',
      imageUrl: 'url2',
    }, {
      id: 333,
      heading: 'heading3',
      shortDescription: 'description3',
      content: 'content3',
      date: '28.05.2020',
      author: 'author3',
      source: 'source1',
      imageUrl: 'url3',
    }];
    service.filterBySource('source1');
    service.$filteredList.subscribe(filteredList => {
      expect(filteredList[0].id).toBe(news[0].id);
      expect(filteredList[1].id).toBe(news[2].id);
    });
  });
});
