import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsByIdComponent } from './news-by-id.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('NewsByIdComponent', () => {
  let component: NewsByIdComponent;
  let fixture: ComponentFixture<NewsByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsByIdComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: 123})
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
