import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, NavigationEnd } from '@angular/router';

import { PageTitleService } from './page-title.service';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

class MockRouter {
  public ne = new NavigationEnd(0, 'http://localhost:4200/login', 'http://localhost:4200/login');
  public events = new Observable((observer) => {
    observer.next(this.ne);
    observer.complete(() => {
      this.browserTitle.setTitle('test');
    });
  });

  constructor (
    public browserTitle: Title
  ) {}
}

describe('PageTitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        PageTitleService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should be created', inject([PageTitleService], (service: PageTitleService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([PageTitleService, Router, Title], (service: PageTitleService, router, browserTitle) => {
    // spyOn(router, 'events').and.returnValue({ subscribe: () => {
    //     browserTitle.setTitle('test');
    //   }
    // });
    spyOn(browserTitle, 'setTitle');
    expect(service).toBeTruthy();

    // expect(() => {
    //   router.events
    // }).toHaveBeenCalled();
  }));
});
