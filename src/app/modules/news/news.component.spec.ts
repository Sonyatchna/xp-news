import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { MaterialModule } from '../../material/material.module';
import { SearchComponent } from '../../shared/components/search/search.component';
import { NewsItemComponent } from '../../shared/components/news-item/news-item.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent, SearchComponent, NewsItemComponent ],
      imports: [
        NoopAnimationsModule,
        MaterialModule,
        RouterModule
      ],
      providers: [{
        provide: Router,
        useValue: {
          id: 123
        }
      }, {
        provide: ActivatedRoute,
        useValue: {
          id: 123
        }
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
